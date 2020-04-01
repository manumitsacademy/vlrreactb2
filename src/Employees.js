import React,{ useState } from 'react';
import { Link,Route, Switch,useRouteMatch } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';

const Employees = function(){
    let { path, url } = useRouteMatch();
    console.log(path,url)
    var [employees,setEmployees] = useState([{ename:'basha','elocation':'kphb'},{ename:'radhika','elocation':'florida'}]);
    return(
        <div style={{border:'1px solid',margin:'10px',padding:'10px',backgroundColor:'lightgreen'}}>
            <ul>
                {
                    employees.map((e,i)=>{
                        return(
                        <li key={i}>
                            <Link to={`${url}/${JSON.stringify(e)}`}>{e.ename}</Link>
                        </li>
                        )
                    })
                }
            </ul>
            <Switch>
                <Route path={`${path}/:emp`}>
                    <EmployeeDetails></EmployeeDetails>
                </Route>
            </Switch>
        </div>
    )
}
export default Employees;