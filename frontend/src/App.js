import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios"
function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const handlefetch=()=>{

    // show an alert if fetch is going on 
    if (loading) {
      alert("Please wait data is loading")
    }
    // else get the data
    else{
      setLoading(true);
      axios.post("http://localhost:8080/postdata").then((res) => {
        axios
          .get("http://localhost:8080/getdata")
          .then((res) => setData(res.data.data));
            setLoading(false);
      });
      
    }
    
    
  }
  const handledelete=()=>{
    // confirm to delete alert
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
      <button className="deletebtn" onClick={handledelete}>
        deletedata
      </button>
      <div className="tablediv">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th colSpan="2">Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Postcode</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img src={item.thumbnail} />
                  </td>
                  <td>{item.first}</td>
                  <td>{item.last}</td>
                  <td>{item.email}</td>
                  <td>{item.country}</td>
                  <td>{item.postcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
