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
    }
  ],

}

var musicList = Object.keys(musicTrivia);




function App() {

  const [song , setSong] = useState("Sad");

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

        <h1>display</h1>

        <div>
          {musicTrivia[song].map((song)=>{
            return(
              <ul key={song.songName}>
                <li>
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
