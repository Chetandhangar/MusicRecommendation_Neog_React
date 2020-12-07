import React,{useState} from 'react';
import './App.css';

const musicTrivia ={
  "Happy" : [
    {
      "songName" : "Tik Tik Vajtey Dokyat",
      "rating" : '4.5/5',
    
    },
    {
      "songName" : "Gulabachi Kali",
      "rating" : "3.5/5"
    }
  ],
  
  "Sad" : [
    {
      "songName" : "Deval Kalji re",
      "rating" : "5/5",
    },
    { 
      "songName" : "Vat Disu De re Deva",
      "rating" : "5/5"
    }
  ],
  "Dance" : [
    {
      "songName" : "Awaj vadhav Dj",
      "rating" : "4.5/5"
    },
    {
      "songName" : "Zinghat",
      "rating" : "3.5/5"
    }
  ],
  "Romantic" : [
    {
      "songName" : "Nako Nako Na Re",
      "rating" : "3/5"
    },
    {
      "songName" : "Khari",
      "rating" : "5/5"
    }
  ]

}

var musicList = Object.keys(musicTrivia);




function App() {

  const [song , setSong] = useState("Happy");

  function clickHandler(music){
    setSong(music)
  }


  return (
    <div className="App">
      <h1>FeelTheRealMusic</h1>

      <div className="content">
        {musicList.map(music=>{
          return <span style={{padding:"2rem", cursor:"pointer"}}
          onClick={()=>clickHandler(music)}
          >{music}</span>
        })}
        <hr></hr>

        <h1>Song Names</h1>
        <hr></hr>
        <div>
          {musicTrivia[song].map((song)=>{
            return(
              <ul key={song.songName}>
                <li className="list-non-bullet">
                  <div>{song.songName}</div>
                  <div>{song.rating}</div>
                </li>
              </ul>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
