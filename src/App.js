
import React from "react";
import './App.css';
import Profile from "./Components/Profile" ;
import Mrk from "./Mrk.jpg";
import Title from "./Components/Title" ;



                const App = () => (
                    
                    <div>
                 
                      
                    <Profile fullName="Mark zuckerberg" bio="Hello from USA" profession="Businessman" >
                    <img className='image' src={Mrk}  alt='Mrk' /> 
                </Profile>
            
                
                    
                    </div>
                );
                export default App; 


               