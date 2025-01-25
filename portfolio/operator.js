let n=2
let ans=(n%2==0)?"Even":"odd"
console.log(ans)


let mark=76
let grade=(mark>=90)?"A":(mark>70)?"B":(mark>40)?"C":"F"
console.log(grade)

let user={
    name:"Ani",
    age:30,
}
let user1={
    country:"India",
    city:"Coimbatore",
}
let arr={...user,...user1}
console.log(arr)