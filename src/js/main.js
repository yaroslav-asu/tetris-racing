function getCookie(name) {
    function escape(s) {
        return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1');
    }

    let match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

class Game {
    endShown = false
    isOn = true
    speed = 150
    endAnimationSpeed = 50
    score = -1
    height = 24
    width = 2
    activeChar = '■'
    inactiveChar = '□'
    loop = null
    lastSpeedChangeScore = -1
    speedUp = false
    paused = false

    constructor() {
        this.field = new Field(this)
        this.border = new Border(this)
        this.blankLine = new BlankLine(this)
        this.interface = new Interface(this)
        this.start()
    }

    start() {
        this.paused = false
        this.loop = setInterval(() => {
            this.update()
            this.render()
        }, this.speed)
    }

    updateSpeed(newSpeed) {
        if (this.paused) return
        this.speed = newSpeed
        clearInterval(this.loop)
        setTimeout(() => {
            this.update()
            this.render()
        })
        this.loop = setInterval(() => {
            this.update()
            this.render()
        }, this.speed)
    }

    pause() {
        clearInterval(this.loop)
        this.loop = null
        this.paused = true
    }

    increaseLines(newWidth) {
        if (newWidth < this.width) return
        this.width = newWidth
        this.field.increaseLines(newWidth)
        this.field.update()
        this.field.render()
    }

    render() {
        this.field.render()
        this.border.render()
        this.blankLine.render()
        this.interface.render()
    }

    print() {
        if (this.isOn) {
            this.update()
        } else if (!this.endShown) {
            this.endGame()
            this.endShown = true
        }
        for (let i = 0; i < this.height; i++) {
            console.log(
                this.border.blocks[i],
                this.blankLine.blocks[i],
                this.field.blocks[i].join(' '),
                this.blankLine.blocks[i],
                this.border.blocks[i],
                '                        ', i
            )
        }
    }

    update() {
        if (!this.endShown && !this.isOn) {
            this.endGame()
            this.endShown = true
        }
        if (!this.isOn) return
        if (this.score >= 30) {
            this.increaseLines(3)
        }
        if (this.lastSpeedChangeScore !== this.score && this.score % 10 === 0 && this.speed >= 45) {
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
        this.saveBestScore()
    }

    saveBestScore() {
        let bestScore = getCookie('score')
        if (bestScore === null || bestScore < this.score) {
            document.cookie = 'score=' + this.score
        }
    }
}

class Interface {
    hiScoreBlinking = false
    hiScoreLoop = null

    constructor(game) {
        this.game = game
        this.render()
        document.getElementById('hi_score').style.opacity = '0.3'
        document.getElementById('pause_text').setAttribute('class', 'interface_text pause--inactive')
    }

    render() {
        if (this.game.isOn) {
            let speed = document.getElementById('speed')
            let speedValue = ('0000' + (Math.trunc((150 - this.game.speed) / 10)).toString()).slice(-5)
            if (speed.innerHTML !== speedValue) speed.innerHTML = speedValue

            let score = document.getElementById('score')
            let scoreValue = ('0000' + this.game.score.toString()).slice(-5)
            if (score.innerHTML !== scoreValue) score.innerHTML = scoreValue
        } else {
            let speed = document.getElementById('speed')
            if (speed.innerHTML !== '00000') speed.innerHTML = '00000'

            if (!this.hiScoreBlinking) {
                this.hiScoreBlinking = true
                let hiScore = document.getElementById('hi_score')
                let counter = 0
                this.hiScoreLoop = setInterval(() => {
                    hiScore.style.opacity = hiScore.style.opacity === "0.3" ? '1' : '0.3'
                    let score = document.getElementById('score')

                    if (counter) {
                        let bestScore = getCookie('score')
                        score.innerHTML = ('0000' + bestScore).slice(-5)
                    } else {
                        score.innerHTML = ('0000' + this.game.score.toString()).slice(-5)
                    }
                    counter = counter ? 0 : 1
                }, 1000)
            }
        }
    }

    destroy() {
        clearInterval(this.hiScoreLoop)
    }
}

class Border {
    blocks = []

    constructor(game) {
        this.game = game
        for (let i = 0; i < this.game.height / 4; i++) {
            this.blocks.push(this.game.inactiveChar)
            this.blocks.push(this.game.activeChar)
            this.blocks.push(this.game.activeChar)
            this.blocks.push(this.game.activeChar)
        }
    }

    update() {
        for (let i = this.game.height - 1; i >= 0; i--) {
            this.blocks[i + 1] = this.blocks[i]
        }
        if (this.blocks[4] === this.game.inactiveChar) {
            this.blocks[0] = this.game.inactiveChar
            this.blocks[1] = this.game.activeChar
            this.blocks[2] = this.game.activeChar
            this.blocks[3] = this.game.activeChar
        }
    }

    render() {
        let borders = document.getElementsByClassName('field_border')
        for (let border of borders) {
            if (border.children.length === 0) {
                for (let i = 0; i < this.game.height - 4; i++) {
                    let block = document.createElement('td')
                    block.setAttribute('class', 'block')
                    border.appendChild(block)
                }
            }
            for (let i = 4; i < this.game.height; i++) {
                if (this.blocks[i] === this.game.activeChar) {
                    border.children[i - 4].setAttribute('class', 'block block--active')
                } else {
                    border.children[i - 4].setAttribute('class', 'block block--inactive')
                }
            }
        }
    }

    endGame() {
        for (let i = this.game.height - 1; i >= 0; i--) {
            setTimeout(() => {

                this.blocks[i] = this.game.activeChar
            }, 24 * this.game.endAnimationSpeed - i * this.game.endAnimationSpeed)
        }
        setTimeout(() => {
            for (let i = this.game.height - 1; i >= 0; i--) {
                setTimeout(() => {
                    this.blocks[i] = this.game.inactiveChar
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
            this.blocks.push(this.game.inactiveChar)
        }
    }

    render() {
        let blocks = document.getElementsByClassName('field_blank_line')
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].children.length === 0) {
                for (let j = 0; j < this.game.height - 4; j++) {
                    let block = document.createElement('td')
                    block.setAttribute('class', 'block')
                    blocks[i].appendChild(block)
                }
            }
            for (let j = 4; j < this.game.height; j++) {
                if (this.blocks[j] === this.game.inactiveChar) {
                    blocks[i].children[j - 4].setAttribute('class', 'block block--inactive')
                } else {
                    blocks[i].children[j - 4].setAttribute('class', 'block block--active')
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
                    this.blocks[i] = this.game.inactiveChar
                }, i * this.game.endAnimationSpeed)
            }
        }, this.game.height * this.game.endAnimationSpeed + this.game.endAnimationSpeed * 2)
    }
}

class Field {
    blocks = []
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
            this.blocks[i] = [];
            for (let j = 0; j < this.fieldWidth; j++) {
                this.blocks[i][j] = this.game.inactiveChar;
            }
        }
    }

    increaseLines(newWidth) {
        for (let i = 0; i < this.game.height; i++) {
            for (let j = 0; j < newWidth - this.fieldWidth; j++) {
                this.blocks[i].push(this.game.inactiveChar)
            }
        }
        this.fieldWidth = newWidth * 3
    }

    checkCollision(x = this.carLine * 3) {
        let carChars = [
            this.blocks[this.game.height - 4][x + 1],
            this.blocks[this.game.height - 3][x],
            this.blocks[this.game.height - 3][x + 1],
            this.blocks[this.game.height - 3][x + 2],
            this.blocks[this.game.height - 2][x + 1],
            this.blocks[this.game.height - 1][x],
            this.blocks[this.game.height - 1][x + 2]
        ]
        return carChars.includes(this.game.activeChar)
    }

    update() {
        let field = document.getElementById('field')
        if (field.className === '') {
            field.setAttribute('class', 'field--two_lined')
        }
        if (field.className === 'field--two_lined' && this.game.width > 2) {
            field.setAttribute('class', 'field--three_lined')
        }

        this.deleteCar(this.game.height - 1, this.carLine * 3 + 1)
        for (let i = this.game.height - 1; i > 0; i--) {
            for (let j = 0; j < this.fieldWidth; j++) {
                this.blocks[i][j] = this.blocks[i - 1][j]
            }
        }
        this.blocks[0] = []
        for (let j = 0; j < this.fieldWidth; j++) {
            this.blocks[0][j] = this.game.inactiveChar
        }
        this.game.isOn = !this.checkCollision()
        this.addCar(this.game.height - 1, this.carLine * 3 + 1)
        this.carsRowsGap = (this.carsRowsGap + 1) % 15
        if (this.carsRowsGap === 14) {
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
        this.blocks[y - 3][x] = this.game.activeChar
        this.blocks[y - 2][x - 1] = this.game.activeChar
        this.blocks[y - 2][x] = this.game.activeChar
        this.blocks[y - 2][x + 1] = this.game.activeChar
        this.blocks[y - 1][x] = this.game.activeChar
        this.blocks[y][x - 1] = this.game.activeChar
        this.blocks[y][x + 1] = this.game.activeChar
    }

    deleteCar(y, x) {
        this.blocks[y - 3][x] = this.game.inactiveChar
        this.blocks[y - 2][x - 1] = this.game.inactiveChar
        this.blocks[y - 2][x] = this.game.inactiveChar
        this.blocks[y - 2][x + 1] = this.game.inactiveChar
        this.blocks[y - 1][x] = this.game.inactiveChar
        this.blocks[y][x - 1] = this.game.inactiveChar
        this.blocks[y][x + 1] = this.game.inactiveChar
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
                    this.blocks[i][j] = this.game.activeChar
                }
            }, 24 * this.game.endAnimationSpeed - i * this.game.endAnimationSpeed)
        }
        setTimeout(() => {
            for (let i = this.game.height - 1; i >= 0; i--) {
                setTimeout(() => {
                    for (let j = 0; j < this.fieldWidth; j++) {
                        this.blocks[i][j] = this.game.inactiveChar
                    }
                }, i * this.game.endAnimationSpeed)
            }
        }, 24 * this.game.endAnimationSpeed + this.game.endAnimationSpeed * 2)
    }

    render() {
        let field = document.getElementById('field')
        if (field.children.length === 0 || field.children.length !== this.fieldWidth * (this.game.height - 4)) {
            field.innerHTML = ''
            for (let i = 4; i < this.game.height; i++) {
                for (let j = 0; j < this.fieldWidth; j++) {
                    let block = document.createElement('td')
                    block.setAttribute('class', 'block')
                    field.appendChild(block)
                }
            }
        }
        for (let i = 4; i < this.game.height; i++) {
            for (let j = 0; j < this.fieldWidth; j++) {
                let block = field.children[(i - 4) * this.fieldWidth + j]
                if (this.blocks[i][j] === this.game.activeChar) {
                    block.setAttribute('class', 'block block--active')
                } else {
                    block.setAttribute('class', 'block block--inactive')
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
        let pauseButton = document.getElementById('pause')
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
                game.interface.destroy()
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
                let pause = document.getElementById('pause_text')
                pause.classList.toggle('pause--inactive')
                if (game.loop) {
                    game.pause()
                    pauseButton.classList.add('control_button--active')
                } else {
                    game.start()
                    pauseButton.classList.remove('control_button--active')
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
                pauseButton.classList.remove('control_button--active')
            }
        })
        pauseButton.addEventListener('click', () => {
            let pause = document.getElementById('pause_text')
            pause.classList.toggle('pause--inactive')
            if (game.loop) {
                game.pause()
            } else {
                game.start()
            }
            pauseButton.blur()
        })
        pauseButton.addEventListener('touchstart', () => {
            if (game.loop) {
                pauseButton.classList.add('control_button--active')
            } else {
                pauseButton.classList.remove('control_button--active')
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
            game.interface.destroy()
            game = new Game()
            let field = document.getElementById('field')
            field.setAttribute('class', 'field--two_lined')
            game.render()
            pauseButton.classList.remove('control_button--active')
        })

        restartButton.addEventListener('mousedown', () => {
            restartButton.classList.add('control_button--active')
        })
        restartButton.addEventListener('mouseup', () => {
            restartButton.classList.remove('control_button--active')
        })

        leftButton.addEventListener('mousedown', () => {
            leftButton.classList.add('control_button--active')
        })
        leftButton.addEventListener('mouseup', () => {
            leftButton.classList.remove('control_button--active')
        })
        rightButton.addEventListener('mousedown', () => {
            rightButton.classList.add('control_button--active')
        })
        rightButton.addEventListener('mouseup', () => {
            rightButton.classList.remove('control_button--active')
        })

        speedUpButton.addEventListener('mouseup', () => {
            game.updateSpeed(game.speed + 20)
            game.speedUp = false
            speedUpButton.classList.remove('control_button--active')
        })
        speedUpButton.addEventListener('mousedown', () => {
            if (!game.speedUp) {
                game.updateSpeed(game.speed - 20)
                game.speedUp = true
            }
            speedUpButton.classList.add('control_button--active')
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