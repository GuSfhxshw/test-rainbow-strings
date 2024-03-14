const chalk = require('chalk');

function chalk_Rainbow(text) {
    const rainbowColors = [chalk.red, chalk.yellow, chalk.green, chalk.blue, chalk.magenta];
    let rainbowText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        rainbowText += color(text[i]);
    }
    return rainbowText;
}


console.log(chalk_Rainbow('\nHello World'));
