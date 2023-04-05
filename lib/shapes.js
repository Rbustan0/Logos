// FILE DESCRIPTION: This file is to classify objects that will be constructed in other files for code.


// Creating an object class Circle to make circular images.

class Circle {
    
    // Constructor for class sets color to null by default
    constructor() {
        // This is specifically null because SVG has a built in circle element so no need to define a path
        this.color = null;
    }
    // calls this method within object to let a string input for color.
    setColor(color) {
        this.color = color;
    }

    // render requirement which passes on details to other files
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// The other classes are going to follow a very similar format, but will not use inheritance due to me wanting them to be very clear that they are DISTINCT shapes.

class Triangle {
    constructor() {
        // later objects set to empty string because path will be defined by polygon and rect elements.
        this.color = '';
    }

    setColor(color){
        this.color = color;
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square {
    constructor() {
        // later objects set to empty string because path will be defined by polygon and rect elements.
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}


// found out recently that you can export multiple objects as once as a statement
module.exports = {Circle,Triangle,Square};