
import React, { useState, useEffect } from 'react';
const Countries = function(){
    var [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then((resp)=>{
            return resp.json()
        })
        .then((data)=>{
            setCountries(data);            
        })

    })
    return(
        <div style={{border:'1px solid',margin:'10px',padding:'10px',backgroundColor:'teal'}}>
            <h2>List of Countries</h2>
            <ul>
                {
                    countries.map((c,i)=>{
                        return (<li key={i}>{c.name}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default Countries;