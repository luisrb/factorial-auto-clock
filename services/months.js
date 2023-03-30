const { program } = require('commander');
const getMonths = async() => {

    program
        .option('-l, --last', 'fill in the last month ')
        .option('-m, --month <number>', 'month ago that you want to fill in');

    program.parse(process.argv);

    const options = program.opts();

    if(options.last){
        return 1;
    }

    if(options.month){
        return options.month;
    }

    return null;

}

module.exports = { getMonths };