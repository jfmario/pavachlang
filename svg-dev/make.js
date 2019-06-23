
const fs = require('fs');
const path = require('path');

let consonants = require('./consonants.json');

// matching direction
function transform1(x, y, dir=1) {
  
  let minx = 0;
  let maxx = 50;
  let miny = 0;
  let maxy = 100;
  
  let xdiff = maxx - minx;
  let ydiff = maxy - miny;
  
  let newX = (x / 100) * xdiff + minx;
  let newY = (y / 100) * ydiff + miny;
  
  return { x: newX, y: newY };
}

// mismatching direction
function transform2(x, y, dir=1) {
  
  let minx = 0;
  let maxx = 50;
  let miny = 10;
  let maxy = 50;
  
  if (dir < 0) {
    miny = 50;
    maxy = 90;
  }
  
  let xdiff = maxx - minx;
  let ydiff = maxy - miny;
  
  let newX = (x / 100) * xdiff + minx;
  let newY = (y / 80) * ydiff + miny - 5;
  
  return { x: newX, y: newY };
}

function processConsonant(letterKey) {
  
  let letter = consonants[letterKey];
  let re = /[A-Z,][\s\d]+/g;
  
  let s = letter.standard;
  let m = "";
  
  let combinedForm1 = []; // form with matching direction
  let combinedForm2 = []; // form with mismatching direction
  
  do {
    m = re.exec(s);
    if (m) {
      
      // if (letterKey == 'z') console.log(m[0]);
      
      let splitString = m[0].trim().split(/\s/);
      let operation = splitString.shift();
      
      combinedForm1.push(operation);
      combinedForm2.push(operation);
      
      // if (letterKey == 'z') console.log(operation);
      // if (letterKey == 'z') console.log(splitString);
      
      if (splitString.length % 2 != 0) {
        throw "Bad Input String";
      } else {
        while (splitString.length > 0) {
          
          let x = parseInt(splitString.shift());
          let y = parseInt(splitString.shift());
          
          // if (letterKey == 'z') console.log(x, y);
          
          let t1 = transform1(x, y, letter.direction);
          let t2 = transform2(x, y, letter.direction);
          
          combinedForm1.push(`${parseInt(t1.x)} ${parseInt(t1.y)}`);
          combinedForm2.push(`${parseInt(t2.x)} ${parseInt(t2.y)}`);
        }
      }
    }
  } while (m);
  
  let form1 = combinedForm1.join(' ');
  let form2 = combinedForm2.join(' ');
  
  if (letter.direction  <  0) {
    let tempForm = form1;
    form1 = form2;
    form2 = tempForm;
  }
  else if (letter.direction == 0) {
    form2 = form1;
  }
  
  return { ...letter, form1, form2 };
}

function main() {
  
  let outConsonants = {};
  for (let letterKey in consonants) {
    outConsonants[letterKey] = processConsonant(letterKey);
  }
  
  let outfile = path.resolve(__dirname, 'site', 'consonants.json');
  fs.writeFileSync(outfile, JSON.stringify(outConsonants));
}

main();