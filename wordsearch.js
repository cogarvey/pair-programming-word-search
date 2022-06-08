const wordSearch = (letters, word) => { 
  let result = horizontalwordSearch(letters, word);
  if (!result) {
    let transposition = verticalWordSearch(letters);
    result = horizontalwordSearch(transposition, word);
  }
  return result;
};


const horizontalwordSearch = (letters, word) => { 
  if (!letters) {
    return false
  }

  const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
    } 
 }
  return false;
};

const verticalWordSearch = (letters) => {
let result =[];
 if (!letters[0]) {
   return false
 }
for (let i = 0; i < letters[0].length; i++) {
  result.push([]);
for (let j = 0; j < letters.length; j++) {
  result[i][j] = letters[j][i];
  }
console.log (result);
return result;
 }
};



module.exports = wordSearch
