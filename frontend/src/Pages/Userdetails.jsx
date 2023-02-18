import React, { useEffect, useState } from 'react'
import axios from "axios"
const Userdetails = () => {
    const [data,setData]=useState([])
    const [filter,setFilter]=useState("")
    const [filtereddataa,setFiltereddata]=useState([])
    const getdata=()=>{
         axios
           .get("http://localhost:8080/getdata")
           .then((res) => setData(res.data.data));
           
    }
    const handlefilter=()=>{
        console.log("called")
        if (filter != "") {
          let filtereddata = data.filter((item) => item.country === filter);
          console.log(filtereddata);
        //   setData(filtereddata);
        } else {
          getdata();
        }
        
    }
    useEffect(()=>{
        handlefilter()
    },[filter])
    useEffect(() => {
      getdata();
    }, []);
  return (
    <div>
      <div>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">filter by country</option>
          <option value="India">India</option>
          <option value="Spain">Spain</option>
          <option value="Australia">Australia</option>
          <option value="Iran">Iran</option>
        </select>
      </div>
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

export default Userdetails
