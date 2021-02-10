// Paren class
class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

//Child class
class Song extends Media {
    constructor(SongData){
        super(SongData);
        this.artist = SongData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name:"Bohemian Rhapsody",
    publishDate:1975,
});

console.log(mySong);