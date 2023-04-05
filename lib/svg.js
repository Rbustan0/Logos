class SVG {
    constructor() {
        // default values based on test cases
        this.width = 300;
        this.height = 200;
        this.text = '';
        this.shape = '';
    }

    // passing through information from shapes.js as an array
    setShape(shape) {
        
        this.shape = shape.render();
        
    }


    // this is in order to have it pass multiple tests with varying parameters in svg.test.js. This is breaking down the render into multiple different pieces to return what is expected of it in the code.
    render() {
        return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }

    setText(message, color){
        if (message.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }

        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
        
    }
}


module.exports = SVG;
