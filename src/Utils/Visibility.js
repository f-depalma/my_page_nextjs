export class Visibility {
    constructor(id) {
        this.id = id
        if (id === 0) {
            this.opacity = 1
            this.visibility = 'visible'
        } else {
            this.opacity = 0
            this.visibility = 'hidden'
        }
    }

    setVisibility(value) {
        /* this.visibility = value > 0.2 ? 'visible' : 'hidden'
        this.opacity = value > 0.85? 1 : value < 0.15 ? 0 : value */
        this.visibility = value > 0 ? 'visible' : 'hidden'
        this.opacity = value
    }

    getCss() {
        return {
            visibility: this.visibility,
            opacity: this.opacity,
        }
    }
}