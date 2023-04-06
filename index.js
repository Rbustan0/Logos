// References to other files within my code to be called upon:
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg');
const fs = require('fs');


// for some reason is throwing me an error if i dont call it here
function isHexColor(hex) {
    return typeof hex === 'string'
        && hex.length === 6
        && !isNaN(Number('0x' + hex))
}
// Reference call to inquirer to take in and store everything we could possibly need.
inquirer
.prompt([
    
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please type a color for your shape:'
        
    },
    {
        type: 'input',
        name: 'text',
        message: 'What will be inscribed in the shape (max 3 characters)?',
        
        // Again doing this for safety reasons even though I already have an error throw in SVG.js
        validate: function (value) {
            if (value.length <= 3) {
                return true;
            } else {
                return 'Please enter a message with no more than 3 characters';
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be (can use hexidecimal)?'
        
       
    }
])
.then((ans) =>{
    
    let shape;

    // Big fan of switch statements
    switch(ans.shape){
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        default:
            break;
    }

    // true or false to choose how its being converted and appended to text
    shape.setColor(ans.color);

    const svg = new SVG();
    svg.setShape(shape);

    
    svg.setText(ans.text, ans.textColor);

    const mysvg = svg.render();
    
    
    fs.writeFile('./examples/logoExample0.svg', mysvg, (err) =>{
        if (err) throw err;
        console.log('Generated logo.svg');
    } )

})