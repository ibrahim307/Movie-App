import React from 'react'

export default function List({Movies,inputSearch}) {  
       return (
            <div>
                {Movies.filter((el)=>el.name.toLowerCase().includes(inputSearch.toLowerCase())).map(el=>
                    <div>
                        <span>{el.rate}</span>
                        <img src={el.image}></img>
                        <span>{el.name}-{el.date}</span>
                       
                        
                    </div>)}
            </div>
        )
  
}

