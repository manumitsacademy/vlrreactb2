import React from 'react';
import { useParams } from 'react-router-dom';
const StudentDetails = function(){
    let {details} = useParams();;
    var x = JSON.parse(details)
    return(        
        <div style={{border:'1px solid',margin:'10px',padding:'10px',backgroundColor:'coral'}}>
            <h1>Student Details</h1>
            <h3>{x.name}</h3>
        </div>
    )
}
export default  StudentDetails;