import {main} from "./utilities/shellCommands";
import {ASCIIToChar, hexToDecimal, charToASCII , decimalToBinary, binaryToDecimal} from "./utilities/conversions";
import { ExIf, XOROperation, fileContents, fromUTF8Array, FindOComplimentXOR} from "./utilities/operations"
import {splitInTwos} from "./utilities/handyFunctions";
// import {exifData} from "./utilities/operations"
//const promise1 = ExIf('data/RubberDuck.jpg')
const promise2 = fileContents('data/34A')
function decodeUnicode(str) {
 // Going backwards: from bytestream, to percent-encoding, to original string.
 return decodeURIComponent(atob(str).split('').map(function (c) {
  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
 }).join(''));
}

promise2.then(data=>{
  const arr = data.join('\n')
 //const w = strArr.map(val=>ASCIIToChar(binaryToDecimal(val)))
 //console.log(w.join(''))
})
