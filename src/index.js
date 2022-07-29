const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let input = expr.match(/.{1,10}/g);
    
    const arr = input.toString().split("00");
    const filtredArr = arr.filter(function (el) {return el != "";});
    // const morse = filtredArr.toString().replaceAll('11', '-').replaceAll('10', '.').replaceAll('**********', ' ');
    const dash = filtredArr.toString().split('11').join('-');
    const dot = dash.split('10').join('.');
    const space = dot.split('**********').join(' ');

    const solution = space.split(',').map(a => a.split(' ').map(b => MORSE_TABLE[b]).join(' ')).join('');
    return solution;
}

module.exports = {
    decode
}