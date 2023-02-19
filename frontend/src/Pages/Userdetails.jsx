import React, { useEffect, useState } from 'react'
import axios from "axios"
import Pagination from '../components/Pagination'
const Userdetails = () => {
    const [data,setData]=useState([])
    const [filter,setFilter]=useState("")
    const [page, setpage] = useState(1);
    const [limit,setLimit]=useState(10)


    //fetch function with filter and page
    const getdata=(filter,page)=>{
      
        axios
          .get(
            `https://cointab-backend-production-953b.up.railway.app/filter/?page=${page}&filter=${filter}`
          )
          .then((res) => setData(res.data.data));
     
         
           
    }

    // updating filter state function
    const handlefilter=(e)=>{
      setpage(1)
      setFilter(e.target.value)
    }
    useEffect(()=>{
        getdata(filter,page);
    },[filter,page])
  return (
    <div>
      <div className='filterdiv'>
        <select onChange={handlefilter} className='filter'>
          <option value="">filter by country</option>
          <option value="India">India</option>
          <option value="Spain">Spain</option>
          <option value="Australia">Australia</option>
          <option value="Iran">Iran</option>
          <option value="Norway">Norway</option>
          <option value="Denmark">Denmark</option>
          <option value="France">France</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Ireland">Ireland</option>
          <option value="Canada">Canada</option>
          <option value="Turkey">Turkey</option>
        </select>
      </div>
      <div>
        <Pagination
          page={page}
          setpage={(page) => setpage(page)}
          total={limit}
        />
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
