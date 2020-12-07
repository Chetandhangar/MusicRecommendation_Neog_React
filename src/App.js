import React,{useState} from 'react';
import './App.css';
import musicTrivia from './shared/musicTrivia'



var musicList = Object.keys(musicTrivia);




function App() {

  const [song , setSong] = useState("Happy");

  function clickHandler(music){
    setSong(music)
  }


  return (
    <div className="App ">
      <h1 className="App-header">FeelTheRealMusic</h1>
      <p className="App-para"><strong>Music Changes the Way We Perceive The World.</strong>
         Choose  the best Song according to your mood. We provide you some of the best songs from the world.
      </p>

      <div className="content">
        {musicList.map(music=>{
          return <div className="music-list"
          onClick={()=>clickHandler(music)}
          >{music}</div>
        })}
        

        <h1 className="content-header">Songs</h1>
        <hr></hr>
        <div className="song-list">
          {musicTrivia[song].map((song)=>{
            return(
              <ul className="list"
               key={song.songName}>
                <li className=" list-non-bullet">
                  <img className="item-song" src={song.image} alt={song.songName}/>
                  <div className="list-item">Song Name : <span className="item-name">{song.songName}</span> </div>
                  <div className="list-item">Rating : <span className="item-name">{song.rating}</span></div>
                  <div className="list-item">Movie Name :<span className="item-name">{song.movieName}</span></div>
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
