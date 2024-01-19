console.log("Welcome To Spotify");
let songIndex=1;
let audioElement=new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgessBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');

let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    { songName: "Warriyo Mortals",filePath: "1.mp3", coverPath: "1.jpg"},
    { songName: "Cielo Huma Huma",filePath: "2.mp3", coverPath: "2.jpg"},
    { songName: "DEAF cave Invincible",filePath: "3.mp3", coverPath: "3.jpg"},
    { songName: "Different Heaven & Ehide-My Heart",filePath: "4.mp3", coverPath: "4.jpg"},
    { songName: "Jani heroes Tonight Feat",filePath: "5.mp3", coverPath: "5.jpg"},
    { songName: "Rabb Salem - e - ishq",filePath: "6.mp3", coverPath: "6.jpg"},
    { songName: "Sakhiyaan",filePath: "7.mp3", coverPath: "7.jpg"},
    { songName: "Bhula Dena",filePath: "new.mp3", coverPath: "8.jpg"},
    { songName: "Tumhari Kasam",filePath: "9.mp3", coverPath: "9.jpg"},
]

songItems.forEach((element ,i)=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity=1;
    }
     else
     {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
     }

})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgessBar.value=progress;
})
myProgessBar.addEventListener('change' ,()=>{
    audioElement.currentTime=myProgessBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex}.mp3`;
        gif.style.opacity=1;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1)
    {
        songIndex=1;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=1;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})
