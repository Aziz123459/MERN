import { form1,form2,form3,ago } from "./utils/formatDate.js";
import chalk from "chalk";




console.log(chalk.red(form1('2023-02-01T13:34:56Z')));
console.log(chalk.red(form1('2000-05-01T16:34:56Z')));
console.log(chalk.red(form1('2007-11-01T17:56:56Z')));
console.log(chalk.red(form1('2016-05-01T06:00:56Z')));
console.log(chalk.red(form1('2020-05-01T05:34:56Z')));
//********************************************** */
console.log(chalk.bgBlue(form2('2023-02-01T13:34:56Z')));
console.log(form2('2000-05-01T16:34:56Z'));
console.log(form2('2007-11-01T17:56:56Z'));
console.log(form2('2016-05-01T06:00:56Z'));
console.log(form2('2020-05-01T05:34:56Z'));
// ********************************************* */
console.log(form3('2023-02-01T13:34:56Z'));
console.log(form3('2000-05-01T16:34:56Z'));
console.log(form3('2007-11-01T17:56:56Z'));
console.log(form3('2016-05-01T06:00:56Z'));
console.log(form3('2020-05-01T05:34:56Z'));
// **********************************************
console.log(ago('2023-02-01T13:34:56Z'));
console.log(ago('2000-05-01T16:34:56Z'));
console.log(ago('2007-11-01T17:56:56Z'));
console.log(ago('2016-05-01T06:00:56Z'));
console.log(ago('2024-05-01T05:34:56Z'));