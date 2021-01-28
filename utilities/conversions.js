//const  XOROperation = (binaryNumber)=> binaryNumber.split('').map((digit) => parseInt(digit) ? 0 : 1).join('')
export const charToASCII = (char) =>char.toString().charCodeAt(0)
export const ASCIIToChar = (num)=> String.fromCharCode(num)
const eightBitShift = (num,shift)=> (num + shift) > 255 ? (num + shift) - 255 : num + shift
const alpabet = [
    'A','B','C','D','E',
    'F','G','H','I','J',
    'K','L','M','N','O','P',
    'Q','R','S','T','U','V',
    'W','X','Y','N','Z']
const stringToBase64 = (str) => Buffer.from(str, 'base64')
export function decimalToBinary(num, numDigits = null){
    let binary = ''
    while(num !==1 && num !==0){
        const bit = num % 2
        binary = bit.toString()+binary
        num = parseInt(num / 2)
    }
    num = num.toString()+binary
    return  (0).toString().padStart(numDigits && numDigits > num.length ? numDigits -  num.length  : 0, "0")+num
}
export function hexToDecimal(hexStr){
    const letterValues = ['A','B','C','D','E','F']
    const convertToDecimalDigit = (char) => letterValues.includes(char) ? 10 + letterValues.indexOf(char) : parseInt(char)
    const hexRev = hexStr.
                    toUpperCase().
                    split('').
                    reverse().map((char,index)=>Math.pow(16,index) * convertToDecimalDigit(char.toUpperCase()))
    return hexRev.reduce((acc,currentValue) => acc + currentValue)
}
export function binaryToDecimal(str){
    const arr = str.split('').reverse()
    const callback = (acc, currentValue, index) => parseInt(currentValue) * (Math.pow(2,index)) + parseInt(acc)
    return arr.reduce(callback)
}

export const stringToHexArray = (str)=>{
    let hexArr = []
    for(let i =0;i < str.length; i = i+2) hexArr.push(str[i]+str[i+1])
    return hexArr
}