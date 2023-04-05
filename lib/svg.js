const { Circle, Triangle, Square } = require("./shapes");


class SVG {
    constructor() {
        // default values based on test cases
        this.width = 300;
        this.height = 200;
        this.elements = [];
    }

    setShape(shape) {
        this.elements.push(shape);
    }


    // this is in order to have it pass multiple tests with varying parameters in svg.test.js. This is breaking down the render into multiple different pieces to return what is expected of it in the code.
    render() {
        const svg = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
        const elements = this.elements.map((elements) => elements.render()).join('');
        return `${svg}${elements}</svg>`;
    }
}