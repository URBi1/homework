const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i in names){
 people[i] = {};
 people[i].name=names[i];
 people[i].ages=ages[i];
 console.log(`${people[i].name} is ${people[i].ages} years old`)
}
console.log(people)

const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

const badWord="DON'T BUY"

for(let i in posts){
  if(posts[i].text.includes(badWord)) {
    console.log("bad"+i)
    posts.splice(i,1)
  }
}

console.log(posts)


const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};


for (let letter in dictionary) {
  console.log(`Words that begin with ${letter}:`);

  for (let word of dictionary[letter]) {
    console.log(`    ${word}`);
  }
}