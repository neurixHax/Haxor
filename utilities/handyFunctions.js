export const isHexStr = (str)=>  typeof str === 'string' && /^[0-9A-Fa-f]+$/g.test(str)
export const objectValues = (obj) => Object.keys(obj).map((name)=> obj[name])
export const splitInTwos = (str)=>{
  const arr = []
  for(let i = 0; i<str.length; i = i +2) arr.push(str[i]+str[i+2])
  return arr
}