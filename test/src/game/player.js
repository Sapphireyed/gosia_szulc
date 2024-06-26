import avatarLImage from './img/avatarLeft.png';
import avatarRImage from './img/avatarRight.PNG';

const avatarL = new Image();
avatarL.src = avatarLImage;

const avatarR = new Image();
avatarR.src = avatarRImage;

let left = null;

class Player {
    constructor(canvas) {
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.width = 58 / 2;
        this.height = 93 / 2;

        // Add touch event listeners
        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
    }

    // Handle touch start
    handleTouchStart(event) {
        event.preventDefault();
        const touch = event.touches[0];
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
    }

    // Handle touch move
    handleTouchMove(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const deltaX = touch.clientX - this.touchStartX;
        const deltaY = touch.clientY - this.touchStartY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                this.moveRight(canvas);
                left = false;
            } else {
                this.moveLeft();
                left = true;
            }
        } else {
            if (deltaY > 0) {
                // Optionally, add moveDown logic if needed
            } else {
                // Optionally, add moveUp logic if needed
            }
        }
    }

    // Handle touch end
    handleTouchEnd(event) {
        event.preventDefault();
        // Optionally, you can add logic here for touch end
    }

    moveLeft(left) {
        this.x -= 7;
        if (this.x <= 0) {
            this.x = 0;
        }
    }

    moveRight(canvas) {
        this.x += 7;
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.width;
        }
    }

    draw(src, ctx) {
        if (left) {
            ctx.drawImage(avatarL, this.x, this.y, this.width, this.height);
        } else if (left == false) {
            ctx.drawImage(avatarR, this.x, this.y, this.width, this.height);
        } else {
            const avatar = new Image();
            avatar.src = src;
            ctx.drawImage(avatar, this.x, this.y, this.width, this.height);
        }
    }
}

export { Player };
