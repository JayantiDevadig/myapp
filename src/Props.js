import React from 'react'

function Welcom(Props) {
    return ( <div> 
        <h1> welcom{Props.name}</h1>
            </div>)
    }


    function Props(){
    return ( <div><Welcom name= ' jay ' /> </div>)
    }

    export default Props 