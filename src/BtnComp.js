import React from 'react';
import myHoc from './myHoc';

class BtnComp extends React.Component{
    render(props){
        return(
            <div style={{border:'1px solid',margin:'10px',padding:'10px'}}>
                <button onClick={this.props.incCnt}>Clicked {this.props.cnt} times</button>

            </div>
        )
    }
}
export default myHoc(BtnComp);