const { Circle, Triangle, Square } = require("./shapes");


class SVG {
    constructor() {
        // default values based on test cases
        this.width = 300;
        this.height = 200;
        this.elements = [];
    }

    // passing through information from shapes.js as an array
    setShape(shape) {
        this.elements.push(shape);
    }


    // this is in order to have it pass multiple tests with varying parameters in svg.test.js. This is breaking down the render into multiple different pieces to return what is expected of it in the code.
    render() {
        const svg = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
        const elements = this.elements.map((element) => element.render()).join('');
        return `${svg}${elements}</svg>`;
    }

    setText(message, color){
        if (message.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }
        const text = new Text(message, color);
        this.elements.push(text);
    }
}

// Going to make a seperate Text object for SVG
class Text {
    constructor(text,fontsize){
        this.text = text;
        this.fontsize = fontsize;
    }
}

module.exports = SVG;