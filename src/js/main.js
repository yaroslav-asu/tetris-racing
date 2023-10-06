class Game {
    endShown = false
    isOn = true
    speed = 150
    endAnimationSpeed = 50
    score = -1
    height = 24
    width = 2
    activeChar = '■'
    loop = null
    lastSpeedChangeScore = -1
    speedUp = false

    constructor() {
        this.field = new Field(this)
        this.border = new Border(this)
        this.blankLine = new BlankLine(this)
        this.interface = new Interface(this)
        this.start()
    }

    start() {
        this.loop = setInterval(() => {
            this.update()
            this.render()
        }, this.speed)
    }

    updateSpeed(newSpeed) {
        this.speed = newSpeed
        clearInterval(this.loop)
        this.loop = setInterval(() => {
            this.update()
            this.render()
        }, this.speed)
    }

    pause() {
        clearInterval(this.loop)
        this.loop = null
    }

    changeWidth(newWidth) {
        this.width = newWidth
        this.field.init()
        this.field.fieldWidth = this.width * 3
        this.field.update()
        this.field.render()
    }

    render() {
        this.field.render()
        this.border.render()
        this.blankLine.render()
        if (!this.isOn) return
        this.interface.render()
    }

    update() {
        if (!this.endShown && !this.isOn) {
            this.endGame()
            this.endShown = true
        }
        if (!this.isOn) return
        if (this.score === 30) {
            this.changeWidth(3)
        } else if (this.score >= 1000) {
            alert(process.env.FLAG)
        }
        if (this.lastSpeedChangeScore !== this.score && this.score % 100 === 0 && this.speed >= 45) {
            this.updateSpeed(this.speed - 10)
            this.lastSpeedChangeScore = this.score
        }
        this.field.update()
        this.border.update()
    }

    endGame() {
        this.updateSpeed(this.endAnimationSpeed)
        this.field.endGame()
        this.border.endGame()
        this.blankLine.endGame()
    }
}

class Interface {
    constructor(game) {
        this.game = game
        this.render()
    }

    render() {
        let score = document.getElementById('score')
        score.innerHTML = ('0000' + this.game.score.toString()).slice(-5)
        let speed = document.getElementById('speed')

        speed.innerHTML = ('0000' + (Math.trunc((150 - this.game.speed) / 10)).toString()).slice(-5)
    }
}

class Border {
    border = []
    borderChar = '■'

    constructor(game) {
        this.game = game
        for (let i = 0; i < this.game.height / 4; i++) {
            this.border.push(0)
            this.border.push(this.borderChar)
            this.border.push(this.borderChar)
            this.border.push(this.borderChar)
        }
    }

    update() {
        for (let i = this.game.height - 1; i >= 0; i--) {
            this.border[i + 1] = this.border[i]
        }
        if (this.border[4] === 0) {
            this.border[0] = 0
            this.border[1] = this.borderChar
            this.border[2] = this.borderChar
            this.border[3] = this.borderChar
        }
    }

    render() {
        let borders = document.getElementsByClassName('border')
        for (let border of borders) {
            border.innerHTML = ''
            for (let i = 4; i < this.game.height; i++) {
                if (this.border[i] === this.borderChar) {
                    let activeBlock = document.createElement('td')
                    activeBlock.setAttribute('class', 'block block--active')
                    border.appendChild(activeBlock)
                } else {
                    let inactiveBlock = document.createElement('td')
                    inactiveBlock.setAttribute('class', 'block block--inactive')
                    border.appendChild(inactiveBlock)
                }
            }
        }
    }

    endGame() {
        for (let i = this.game.height - 1; i >= 0; i--) {
            setTimeout(() => {

                this.border[i] = this.borderChar
            }, 24 * this.game.endAnimationSpeed - i * this.game.endAnimationSpeed)
        }
        setTimeout(() => {
            for (let i = this.game.height - 1; i >= 0; i--) {
                setTimeout(() => {
                    this.border[i] = 0
                }, i * this.game.endAnimationSpeed)
            }
        }, 24 * this.game.endAnimationSpeed + this.game.endAnimationSpeed * 2)
    }
}

class BlankLine {
    blocks = []

    constructor(game) {
        this.game = game
        for (let i = 0; i < this.game.height; i++) {
            this.blocks.push(0)
        }
    }

    render() {
        let blocks = document.getElementsByClassName('blank_line')
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].innerHTML = ''
            for (let j = 4; j < this.game.height; j++) {
                if (this.blocks[j] === 0) {
                    let block = document.createElement('td')
                    block.setAttribute('class', 'block block--inactive')
                    blocks[i].appendChild(block)
                } else {
                    let block = document.createElement('td')
                    block.setAttribute('class', 'block block--active')
                    blocks[i].appendChild(block)
                }
            }
        }
    }

    endGame() {
        for (let i = this.game.height - 1; i >= 0; i--) {
            setTimeout(() => {
                this.blocks[i] = this.game.activeChar
            }, this.game.height * this.game.endAnimationSpeed - i * this.game.endAnimationSpeed)
        }
        setTimeout(() => {
            for (let i = this.game.height - 1; i >= 0; i--) {
                setTimeout(() => {
                    this.blocks[i] = 0
                }, i * this.game.endAnimationSpeed)
            }
        }, this.game.height * this.game.endAnimationSpeed + this.game.endAnimationSpeed * 2)
    }
}

class Field {
    blockChar = '■'
    field = []
    carLine = 0

    carsRowsGap = 0

    constructor(game) {
        this.game = game
        this.fieldWidth = this.game.width * 3
        this.init()
        this.generateCar()
        this.createMainCar()
    }

    init() {
        for (let i = 0; i < this.game.height; i++) {
            this.field[i] = [];
            for (let j = 0; j < this.fieldWidth; j++) {
                this.field[i][j] = 0;
            }
        }
    }

    checkCollision(x = this.carLine * 3) {
        let carChars = [
            this.field[this.game.height - 4][x + 1],
            this.field[this.game.height - 3][x],
            this.field[this.game.height - 3][x + 1],
            this.field[this.game.height - 3][x + 2],
            this.field[this.game.height - 2][x + 1],
            this.field[this.game.height - 1][x],
            this.field[this.game.height - 1][x + 2]
        ]

        return carChars.includes(this.blockChar)
    }

    update() {
        let field = document.getElementById('field')
        if (field.className === '') {
            field.setAttribute('class', 'field--two_lined')
        }
        if (field.className === 'field--two_lined' && this.game.width > 2) {
            console.log("three")
            field.setAttribute('class', 'field--three_lined')
        }

        this.deleteCar(this.game.height - 1, this.carLine * 3 + 1)
        for (let i = this.game.height - 1; i > 0; i--) {
            for (let j = 0; j < this.fieldWidth; j++) {
                this.field[i][j] = this.field[i - 1][j]
            }
        }
        this.field[0] = []
        for (let j = 0; j < this.fieldWidth; j++) {
            this.field[0][j] = 0
        }
        this.game.isOn = !this.checkCollision()
        this.addCar(this.game.height - 1, this.carLine * 3 + 1)
        this.carsRowsGap++
        if (this.carsRowsGap === 14) {
            this.carsRowsGap = 0
            this.generateCar()
        }
    }

    generateCar() {
        if (this.game.width > 2) {
            if (Math.random() > 0.5) {
                let x = Math.floor(Math.random() * (this.game.width)) * 3 + 1
                this.addCar(3, x)
                this.addCar(3, x - 3)
            } else {
                this.addCar(3, Math.floor(Math.random() * (this.game.width)) * 3 + 1)

            }
        } else {
            this.addCar(3, Math.floor(Math.random() * (this.game.width)) * 3 + 1)
        }
        this.game.score++
    }

    createMainCar() {
        this.addCar(this.game.height - 1, 1)
    }

    addCar(y, x) {
        this.field[y - 3][x] = this.blockChar
        this.field[y - 2][x - 1] = this.blockChar
        this.field[y - 2][x] = this.blockChar
        this.field[y - 2][x + 1] = this.blockChar
        this.field[y - 1][x] = this.blockChar
        this.field[y][x - 1] = this.blockChar
        this.field[y][x + 1] = this.blockChar
    }

    deleteCar(y, x) {
        this.field[y - 3][x] = 0
        this.field[y - 2][x - 1] = 0
        this.field[y - 2][x] = 0
        this.field[y - 2][x + 1] = 0
        this.field[y - 1][x] = 0
        this.field[y][x - 1] = 0
        this.field[y][x + 1] = 0
    }

    moveCarLeft() {
        if (this.carLine === 0 || !this.game.isOn) return
        let collisionCheck = !this.game.field.checkCollision((this.game.field.carLine - 1) * 3)
        this.deleteCar(this.game.height - 1, this.carLine * 3 + 1)
        this.carLine--
        this.addCar(this.game.height - 1, this.carLine * 3 + 1)
        this.game.isOn = collisionCheck
    }

    moveCarRight() {
        if (this.carLine + 1 === this.game.width || !this.game.isOn) return
        let collisionCheck = !this.game.field.checkCollision((this.game.field.carLine + 1) * 3)
        this.deleteCar(this.game.height - 1, this.carLine * 3 + 1)
        this.carLine++
        this.addCar(this.game.height - 1, this.carLine * 3 + 1)
        this.game.isOn = collisionCheck
    }

    endGame() {
        for (let i = this.game.height - 1; i >= 0; i--) {
            setTimeout(() => {
                for (let j = 0; j < this.fieldWidth; j++) {
                    this.field[i][j] = this.blockChar
                }
            }, 24 * this.game.endAnimationSpeed - i * this.game.endAnimationSpeed)
        }
        setTimeout(() => {
            for (let i = this.game.height - 1; i >= 0; i--) {
                setTimeout(() => {
                    for (let j = 0; j < this.fieldWidth; j++) {
                        this.field[i][j] = 0
                    }
                }, i * this.game.endAnimationSpeed)
            }
        }, 24 * this.game.endAnimationSpeed + this.game.endAnimationSpeed * 2)
    }

    print() {
        if (this.game.isOn) {
            this.update()
        } else if (!this.endShown) {
            this.endGame()
            this.endShown = true
        }
        for (let i = 0; i < this.game.height; i++) {
            console.log(this.field[i].join(' '), '                        ', i)
        }
    }

    render() {
        let field = document.getElementById('field')
        field.innerHTML = ''
        for (let i = 4; i < this.game.height; i++) {
            for (let j = 0; j < this.fieldWidth; j++) {
                if (this.field[i][j] === this.blockChar) {
                    let activeBlock = document.createElement('td')
                    activeBlock.setAttribute('class', 'block block--active')
                    field.appendChild(activeBlock)
                } else {
                    let inactiveBlock = document.createElement('td')
                    inactiveBlock.setAttribute('class', 'block block--inactive')
                    field.appendChild(inactiveBlock)
                }
            }
        }
    }
}

(function () {
    window.onload = loadHandler
    window.Game = Game
    window.Field = Field
    window.BlankLine = BlankLine
    window.Interface = Interface

    function loadHandler() {
        let game = new Game()
        let leftButton = document.getElementById('left')
        let rightButton = document.getElementById('right')
        let restartButton = document.getElementById('down')
        let speedUpButton = document.getElementById('up')
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowLeft') {
                leftButton.classList.add('control_button--active')
                game.field.moveCarLeft()
            } else if (event.code === 'ArrowRight') {
                rightButton.classList.add('control_button--active')
                game.field.moveCarRight()
            } else if (event.code === 'ArrowDown') {
                restartButton.classList.add('control_button--active')
                game.pause()
                game = new Game()
                let field = document.getElementById('field')
                field.setAttribute('class', 'field--two_lined')
                game.render()

            } else if (event.code === 'ArrowUp') {
                speedUpButton.classList.add('control_button--active')
                if (!game.speedUp) {
                    game.updateSpeed(game.speed - 20)
                    game.speedUp = true
                }
            } else if (event.code === 'Space') {
                let pause = document.getElementById('pause')
                pause.classList.toggle('pause--inactive')
                if (game.loop) {
                    game.pause()
                } else {
                    game.start()
                }
            }
        }, false);
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowUp') {
                if (game.speedUp) {
                    game.updateSpeed(game.speed + 20)
                    game.speedUp = false
                }
                speedUpButton.classList.remove('control_button--active')
            } else if (event.code === 'ArrowLeft') {
                leftButton.classList.remove('control_button--active')
            } else if (event.code === 'ArrowRight') {
                rightButton.classList.remove('control_button--active')
            } else if (event.code === 'ArrowDown') {
                restartButton.classList.remove('control_button--active')
            }
        })
        leftButton.addEventListener('click', () => {
            game.field.moveCarLeft()
        })
        rightButton.addEventListener('click', () => {
            game.field.moveCarRight()
        })
        restartButton.addEventListener('click', () => {
            game.pause()
            game = new Game()
            let field = document.getElementById('field')
            field.setAttribute('class', 'field--two_lined')
            game.render()
        })
        speedUpButton.addEventListener('mouseup', () => {
            game.updateSpeed(game.speed + 20)
            game.speedUp = false
        })
        speedUpButton.addEventListener('mousedown', () => {
            if (!game.speedUp) {
                game.updateSpeed(game.speed - 20)
                game.speedUp = true
            }
        })
        speedUpButton.addEventListener('touchstart', () => {
            if (!game.speedUp) {
                game.updateSpeed(game.speed - 20)
                game.speedUp = true
            }
        })
        speedUpButton.addEventListener('touchend', () => {
            game.updateSpeed(game.speed + 20)
            game.speedUp = false
        })
    }
})();