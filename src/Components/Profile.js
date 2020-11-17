
import React from "react";




const profile = (props) =>{

        return (
        <div>
      

                <h1> Full name :{props.fullName}     </h1>
                <h1> Bio :      {props.bio}          </h1>
                <h1> Profession :{props.profession}   </h1>
                <button onClick={alert}>Click me</button>
                {props.children}
                
        </div>
        
        )
        }
        export default profile ;