import React from "react";

const SearchBox =({OnSearch})=>{
    return(
        <div className="pa2 tc">
            <input 
            className="dib br3 pa3 ma2 bw2 shadow-5  bg-light-blue " 
            type="Search" 
            placeholder="Search By Name"
            onChange={OnSearch}
            />
            
        </div>
    )
}
export default SearchBox;