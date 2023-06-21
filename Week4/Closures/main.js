const StringFormatter  = function () {
  const capitalizeFirst  = (str)  => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  const toSkewerCase = (str) =>  str.replace(/\s+/g, '-');
  
  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase
  }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box


////////////////////////////////////////////co////////////////
//Exercise 2////////////////////////////////////////////////
////////////////////////////////////////////////////////////
 

const Bank = function(){
  let money=500
  const depositCash = function (cash) {money+=cash}
  const checkBalance = function() {console.log(money)}
  return {
    deposit: depositCash,
    showBalance: checkBalance
  }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

////////////////////////////////////////////co////////////////
//Exercise 3////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const SongsManager = function(){
  const songs = {};
  const addSong = (songName, songURL) => {
    const videoId = songURL.split("=")[1];
    songs[songName] = videoId;
  };

  const getSong = (songName) => {
    const videoId = songs[songName];
    if (videoId) {
      const songURL = `https://www.youtube.com/watch?v=${videoId}`;
      console.log(songURL);
    } else {
      console.log("Song not found");
    }
  };

  return {
    addSong,
    getSong,
  };
};

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
