
let consonants = require('./consonants.json');

// matching direction
function transform1(x, y, dir=1) {
  
}

// mismatching direction
function transform2(x, y, dir=1) {
  
}

function main(letterKey) {
  
  let letter = consonants[letterKey];
  let re = /[A-Z][\s\d]+/g;
  
  let s = letter.standard;
  let m = "";
  
  let combinedForm1 = []; // form with matching direction
  let combinedForm2 = []; // form with mismatching direction
  
  do {
    m = re.exec(s);
    if (m) {
      
      let splitString = m[0].trim().split(/\s/);
      let operation = splitString.shift();
      
      if (splitString.length % 2 != 0) {
        throw "Bad Input String";
      } else {
        while (splitString.length > 0) {
          
          let x = parseInt(splitString.shift());
          let y = parseInt(splitString.shift());
          
          console.log(x, y);
        }
      }
    }
  } while (m);
}

main("m");