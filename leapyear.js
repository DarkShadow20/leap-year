var chalk=require('chalk');
var readlinesync=require('readline-sync');

var userName=readlinesync.question(chalk.bold.cyan("May I know your name?"));
var birthDate=readlinesync.question(chalk.bold.magenta("Hi "+userName+ " may I know your date of birth ?(yyyy-mm-dd)"));

function isDate(birthDate){
  if(isNaN(birthDate) && !isNaN(Date.parse(birthDate)))
    return true;
  return false;
}
var ans= isDate(birthDate);
if(!ans)
{
  console.log(chalk.bold.red("try again"));
}

var year= birthDate.split("-");

if(year[0]%4 != 0){
  var reply=false;
  console.log(chalk.yellow("You are not born in leapYear"));
}
else{
  reply=true;
  console.log(chalk.green("You are born in leapYear"));
}

if(reply){
  var check=readlinesync.question(chalk.blue("Would you like to post this on social media ?"));
}