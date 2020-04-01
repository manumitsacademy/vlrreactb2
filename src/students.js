import React,{useState,useEffect} from 'react';
import { Link, Switch, Route,useRouteMatch } from 'react-router-dom';
import StudentDetails from './StudentDetails';
const Students = function(){
    useEffect(()=>{
        console.log("use Effect called")
    })
    var [students,setStudents] = useState([{name:'praveen',age:36},{name:'srikanth',age:26}])
    var {url,path} = useRouteMatch();
    return(
        <div style={{border:'1px solid',margin:'10px',padding:'10px',backgroundColor:'coral'}}>
            <h2>Students component</h2>
            <ul>
               {
                   students.map((s,i)=>{
                       return(
                        <li key={i}>
                            <Link to={`${url}/studentDetails/${JSON.stringify(s)}`}>{s['name']}</Link>&nbsp;&nbsp;
                        </li>
                       )
                   })
               }
            </ul>
            <Switch>
                <Route exact path={`${path}/studentDetails/:details`} component={StudentDetails}></Route>
            </Switch>
        </div>
    )
}
export default Students;