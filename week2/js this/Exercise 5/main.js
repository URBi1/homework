const revealSecret = function () {
  return this.secret;  
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  alert(person.name + " said: " + result);  };

const avi = {
  name: "Avi",  
  secret: "I'm scared of snakes!"
};

const narkis = {
  name: "Narkis",  
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
