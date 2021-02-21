const { exec } = require('child_process');
const { Command } = require('commander');
const { exit } = require('process');
const clicalc = new Command();
const prompt = require('prompt')
clicalc.version('1.0.0');
clicalc
    .option('-c, --console', 'Open a console to type things in')
    .option('-e, --equation <equation>', 'Compute an equation');
clicalc.parse(process.argv);
const options = clicalc.opts();
if(options.equation){
    console.log(eval(options.equation))
}
if(options.console){
        async function execConsole(){
            prompt.start();
            var cmd = await prompt.get(['cmd']);
            if(cmd["cmd"]=="exit"){
                exit
            } else {
                console.log(eval(cmd["cmd"]))
            }
        }
            execConsole()
}