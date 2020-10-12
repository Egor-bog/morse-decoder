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
    let map = new Map (Object.entries(MORSE_TABLE));
    const str = expr.match(new RegExp(`.{1,${10}}`, 'g'));
    let resW = '';
    let letter = '';
    for (let i = 0; i < str.length; i++) {
      let resS = '';
      let world = str[i];
      if (world == '**********') {
        resW += " ";
        continue;
      }
      for (let y = 0; y < world.length; y++) {
        if (world[y] == 0) continue;
        else {
          world = world.slice(y);
          break;
        }
      }  
        worldStr = world.match(new RegExp(`.{1,${2}}`, 'g'));
        for (let x = 0; x < worldStr.length; x++) {
          if (worldStr[x] == '10') {resS += '.' ;} 
          else {resS += '-';}
        }  
      letter =map.get(resS);
      resW += letter;
      
    }
    return resW;
}

module.exports = {
    decode
}