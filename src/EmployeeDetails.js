import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = function(){
    var {emp} = useParams();
    emp = JSON.parse(emp)
    console.log("HIHIH")
    return(
        <div>
            <h1>Employee Details</h1>
            <h2>{emp.ename}</h2>
            <h2>{emp.elocation}</h2>
        </div>
    )
}
export default EmployeeDetails;