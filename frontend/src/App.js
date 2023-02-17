import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios"
function App() {
  const [data,setData]=useState([])
  const handlefetch=()=>{
    axios.post("http://localhost:8080/postdata").then((res)=>{
      axios
        .get("http://localhost:8080/getdata")
        .then((res) => setData(res.data.data));
    })
    
  }
  const handledelete=()=>{
    // confirm alert
    if (
      window.confirm("Are you sure you want to delete all the data from database?")
    ) {
      // delete data api will be called
      // alert("Data will get deleted from data base")
      axios.delete("http://localhost:8080/deletedata")
      .then((res)=>console.log(res.data.msg))
      console.log("Data delete successfull");
      setData([])

    } else {
      // no api will get called
      console.log("Data was not delete from database.");
    }
    
  }
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <div className="App">
      

      <button onClick={handlefetch}>Getdata</button>
      <button onClick={handledelete}>deletedata</button>
      {/* {
        data.map((item)=>(
          
        ))
      } */}
    </div>
  );
}

export default App;
