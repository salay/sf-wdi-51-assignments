import React from 'react';

const Result = (props) => 
{
    return(
        <div>
            <img src={props.result.images.downsized.url} alt ="" ></img>
        </div>
    )
}

export default Result