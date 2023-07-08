import React from 'react';
import Cards from './Cards';

const Cardlist =({robots})=>{
    return(
    <div>
        {  
         robots.map((user,i)=>{
             return (<Cards 
                key={i} 
                name={robots[i].name}
                id={robots[i].id} 
                email={robots[i].email}
                />);
         })
        }
    </div>
    );
}
export default Cardlist;