import React from 'react';
import BtnComp from './BtnComp';
import './mystyle.css';
class First extends React.Component{
    render(){
        return(
            <div className="better">
                <h1>This is first component</h1>
                <BtnComp></BtnComp>
                <img src="/friends.jpg"></img>
            </div>
        )
    }
}

export default First;