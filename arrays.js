let backpack = []

backpack.push('Jedi Robe')
backpack.push('Lightsaber')
backpack.push('Crippling sense of failure and guilt')

backpack.splice(1, 1)

backpack.push('Wookie Coat')

backpack.pop()

backpack.push('blue milk', 'baby yoda', 'luke', 'com device', 'high ground', 'blaster')

let stroller = backpack.splice(3,2)

console.log(backpack)
console.log(stroller)


for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}