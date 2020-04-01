import React from 'react';
import myHoc from './myHoc';

const H1Comp = (props)=>(
            <div style={{border:'1px solid',margin:'10px',padding:'10px'}}>
                <h1 onClick={props.incCnt}>This h1 clicked {props.cnt} times</h1>
            </div>
        )

export default myHoc(H1Comp);