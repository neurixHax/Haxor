import exif from 'exiftool'
import fs from 'fs'
export function XOROperation(binary1, binary2){
    let result = ''
    for(let i = 0;i<binary1.length;i++){
        if(binary1[i] === binary2[i]) result = result+'0'
        else result =  result+'1'
    }
    return result
}
export const  FindOComplimentXOR = (binary)=> binary.split('').map((value)=>value === '1' ? '0' : '1').join('')
export function readFile(file){
  return new Promise(
    (resolve,reject) => {
      fs.readFile(file,  function (err, data) {
        if (err)
          reject(err)
        else {
           resolve(data)
        }
      })
    }
  )
}
export async function  ExIf(file){
  const data = await readFile(file).then(data=>data)
  return new Promise(async (resolve, reject)=>{
    exif.metadata(data, function (err, metadata) {
      if (err)
        reject(err)
      else{
        resolve(metadata)
      }
    })
  })
}
export async function fileContents(file,dataType=null){
  switch(dataType){
    case 'exif':
      return await ExIf(file).then(metadata=> metadata)
      break
    default:
      return await readFile(file).then(data=>data)
      break
  }
}

export function fromUTF8Array(data) { // array of bytes
  let arr = [], i;
  for (i = 0; i < data.length; i++) {
    var value = data[i];
    arr.push(value)

  }
  return arr
}