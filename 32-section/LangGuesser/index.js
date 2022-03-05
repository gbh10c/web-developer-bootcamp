import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const code = franc(input);
if (code === 'und') {
  console.log("Sorry, couldn't figure it out. please try again!".red);
} else {
  const language = langs.where("3", code);
  console.log(`Our best guess is: ${language.name}`.green);
}
