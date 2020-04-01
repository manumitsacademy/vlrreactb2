import React from 'react';
const myHoc = function(MyComponent){
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state={
                count:0
            }
        }
        incrementCount = ()=>{
            this.setState({count:this.state.count+1})
        }
        render(){
            return(
                <MyComponent cnt={this.state.count} incCnt={this.incrementCount}></MyComponent>
            )
        }
    }
    return NewComponent;
}
export default myHoc;