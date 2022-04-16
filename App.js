import './App.css';
import React,{useEffect,useState} from 'react'

const App = () =>{
  const [data,setData] = useState([])
  useEffect(()=>{
    // fetch('https://archive.org/metadata/TheAdventuresOfTomSawyer_201303').then(
    //   response => response.json()
    // ).then(json =>console.log(json.files)) //for consoling the data
    fetch('https://archive.org/metadata/TheAdventuresOfTomSawyer_201303').then(
      response => response.json()
    ).then(json =>setData(json.files))
  },[])
  return(
    <div className='App'>
      {data.map((item)=> <p key={item.sha1}>{item.name}</p>)}
    </div>
  )
}

export default App;
