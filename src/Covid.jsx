import React, { useEffect, useState } from 'react';
const Covid = ()=>{
    const[curr,setCurr] = useState([]);
    const [sn,setSn]=useState(1);

    const getDetails = async()=>{
        try{
        const url = 'https://api.covid19india.org/data.json';
        const resp = await fetch(url);
        const respdata = await resp.json();
        const data = respdata.statewise;
        setCurr(data);
      
        // console.log(data.statewise)
        // setCurr(data);
        }
        catch(err)
        {
            console.log(err);
        }

    }

useEffect(()=>{
    getDetails();

},[]);
    return(
<>
<div className="data">
<h1>🔴 Covid Tracker in INDIA 🚩</h1>
<p className="creater">Powered by : <b>GKG</b></p>

      {curr.map((ele,index) => (
          <>

        <p className="list" key={ele.id}> {index} {ele.state} | Active🟢 {ele.active} | Deaths🔴 {ele.deaths} | Recovered🟡 {ele.recovered} lastupdatedtime⏲️ {ele.lastupdatedtime} </p>
  
        </>
      )
      
      )
      }
    </div>

    
{/* <h1>Covid19 Tracker 🔴</h1>
<h1>State: {curr.state}</h1>
<h1>Active: {curr.active}</h1>
<h1>Recovered: {curr.recovered}</h1>
<h1>Death: {curr.deaths}</h1>
<p>Last Update : {curr.lastupdatedtime}</p> */}








</>

    )

}
export default Covid;