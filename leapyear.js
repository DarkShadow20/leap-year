const chalk=require('chalk');
const readlinesync=require('readline-sync');

const userName=readlinesync.question(chalk.bold.cyan("May I know your name?"));
const birthDate=readlinesync.question(chalk.bold.magenta("Hi "+userName+ " may I know your date of birth ?(yyyy-mm-dd)"));

function isDate(birthDate){
  if(isNaN(birthDate) && !isNaN(Date.parse(birthDate)))
    return true;
  return false;
}
const ans= isDate(birthDate);
if(!ans)
{
  console.log(chalk.bold.red("try again"));
}

let year= birthDate.split("-");
let reply;
if(year[0]%4 != 0){
  reply=false;
  console.log(chalk.yellow("You are not born in leapYear"));
}
else{
  reply=true;
  console.log(chalk.green("You are born in leapYear"));
}

if(reply){
  let check=readlinesync.question(chalk.blue("Would you like to post this on social media ?"));
}