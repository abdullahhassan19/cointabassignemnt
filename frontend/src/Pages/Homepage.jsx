import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";


const Homepage = () => {
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(false);
     const [isdata,setIsData]=useState(false)
     const navigate = useNavigate();


     // Fetch function
     const handlefetch = () => {
       // show an alert if fetch is going on
       if (loading) {
         alert("Please wait data is loading");
       }
       // else get the data
       else {
         setLoading(true);
         axios
           .post(
             "https://cointab-backend-production-953b.up.railway.app/postdata"
           )
           .then((res) => {
             axios
               .get(
                 "https://cointab-backend-production-953b.up.railway.app/getdata"
               )
               .then((res) => setData(res.data.data));
             setLoading(false);
             setIsData(true);
           });
       }
     };

     //delete function
     const handledelete = () => {
       // confirm to delete alert
       if (
         window.confirm(
           "Are you sure you want to delete all the data from database?"
         )
       ) {
         // delete data api will be called

         // alert("Data will get deleted from data base")
         axios
           .delete(
             "https://cointab-backend-production-953b.up.railway.app/deletedata"
           )
           .then((res) => console.log("Data delete successfull"));
         setData([]);
         setIsData(false);
       } else {
         // no api will get called
         console.log("Data was not delete from database.");
       }
     };

     //navigating to userspage
     const userdetailspage = () => {
       navigate("/userdetails");
     };
     useEffect(() => {
       console.log(data);
     }, [data]);
  return (
    <div>
      <button onClick={handlefetch}>Getdata</button>
      <button className="deletebtn" onClick={handledelete}>
        deletedata
      </button>
      <button onClick={userdetailspage}>User Details </button>
      {loading ? (
        <Loading />
      ) : (
        <div className="tablediv">
          <table>
            {isdata?<thead>
              <tr>
                <th>Image</th>
                <th colSpan="2">Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Postcode</th>
              </tr>
            </thead>:<></>}
            
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
      )}
    </div>
  );
};

export default Homepage;
