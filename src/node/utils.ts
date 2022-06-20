import * as chalk from 'chalk';

export const info = (msg, textColor = 'white', bgColor = 'bgBlue', label = 'BAIDU SEO PLUGIN') => {
    console.log(`${chalk.reset.bold[textColor][bgColor](` ${label}`)} ${msg}`);
}

export const warn = (msg, textColor = 'white', bgColor = 'bgYellow', label = 'BAIDU SEO PLUGIN') => {
    console.log(`${chalk.reset.bold[textColor][bgColor](` ${label}`)} ${msg}`);
}

export const error = (msg, textColor = 'white', bgColor = 'bgRed', label = 'BAIDU SEO PLUGIN') => {
    console.log(`${chalk.reset.bold[textColor][bgColor](` ${label} ${msg}`)}`);
}
