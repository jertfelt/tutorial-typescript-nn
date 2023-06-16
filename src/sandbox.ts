//types:
type StringOrNum = string| number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
}
const greet = (user: objWithName) => {
}

let greet2: (a:string, b: string) => void;
greet2 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}
//greet2 måste matcha exakt

let calc: (a: number, b: number, c: string) => number;
calc = (numone: number, numTwo: number ,action: string) => {
  if(action ==="add"){
    return numone + numTwo
  } 
  else {
    return numone - numTwo;
  }
}

let logDetails2: (obj: {name: string, age:number}) => void;
logDetails2 = (ninja: {name:string, age:number}) => {
  console.log(`${ninja.name}`)
}