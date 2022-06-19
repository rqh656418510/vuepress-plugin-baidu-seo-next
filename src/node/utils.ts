import * as chalk from 'chalk';

export const logger = (msg, color = 'blue', label = 'BAIDU_SEO') => {
    console.log(`\n${chalk.reset.inverse.bold[color](` ${label} : ${msg} `)}`);
}