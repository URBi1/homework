/*const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }
  person.speak("cheese toast")
*/


//Exercise 1

const isEven = function (number){
    if(!(number%2)) return true;
    return false;
}

console.log(isEven(10));

//Exercise 2

const arrayOfNumbers = [10,11,13,13,17,17,29,12,14,16];

const printEven= function(arrayInPrintFunction){
    for (let item of arrayInPrintFunction) {
        if(isEven(item)) console.log(item);
    }
}

printEven(arrayOfNumbers);

//Exercise 3

const checkExists = function(arrayOfNumbers, number){
    for(let item of arrayOfNumbers) {
        if(number===item) return true;
    }
    return false;
};

console.log (checkExists([1, 2, 3], 2)); 
console.log (checkExists([1, 2, 3], 5));

//Exercise 4

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//Exericese 5

const increaseByNameLength = function(money, name) {
    return money + name.length;
};

const makeRegal = function(name) {
    return "His Royal Highness, " + name;
};

const turnToKing = function(name, money){
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // Output: His Royal Highness, MARTIN LUTHER has 113 gold coins

//Exercise 6


people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

const capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const getAge = function(age){
    if(age < 21){
      return "underage";
    } else if(age > 55){
      return "55+";
    } else {
      return age + " year old";
    }
  }
  
  const getPlace = function(city, country){
    return `from ${capitalize(city)}, ${capitalize(country)}`;
  }
  
  const getCatchPhrase = function(phrase){
    return `loves to say "${capitalize(phrase)}"`;
  }
  
  const getSummary = function(person){
    let summary = `${capitalize(person.name)} is ${getAge(person.age)} `
    summary += `${capitalize(person.profession)} `
    summary += `${getPlace(person.city, person.country)}. `
    summary += `${capitalize(person.name)} ${getCatchPhrase(person.catchphrase)}.`
    return summary;
  }
  
  for(let i = 0; i < people_info.length; i++){
    console.log(getSummary(people_info[i]));
  }
  




//Exercise 7


const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}


let words = story.toLowerCase().split(" ");

for(let i = 0; i < words.length; i++){
    let word = words[i];
    for(let j = 0; j < specialChars.length; j++){
        let char = specialChars[j];
        word = word.replace(new RegExp(`\\${char}`, "g"), "");
    }
    if (wordCounts[word]) {
        wordCounts[word] += 1;
    } else {
        wordCounts[word] = 1;
    }
    
}

console.log(wordCounts);

//Exercise 7 - method 2

const cleanText = function(text, specialChars){
    let cleanedText = text.toLowerCase();
    for(let i = 0; i < specialChars.length; i++){
      cleanedText = cleanedText.split(specialChars[i]).join("");
    }
    return cleanedText;
  }

  
  const addWordCount = function(words, wordCounts){
    for(let i = 0; i < words.length; i++){
      let word = words[i];
      if (wordCounts[word]) {
        wordCounts[word] += 1;
    } else {
        wordCounts[word] = 1;
    }
    }
  }

  
  const countWords = function(story, specialChars){
    let wordCounts = {};
    let cleanedText = cleanText(story, specialChars);
    let words = cleanedText.split(" ");
    addWordCount(words, wordCounts);
    console.log(wordCounts);
  }
  

  countWords(story, specialChars);
  

