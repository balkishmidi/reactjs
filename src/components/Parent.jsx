import React from 'react';
import Child from '../components/Child'

class Parent extends React.Component {
  
    state = {  }
    render() { 
        const messageFromParent ="Hello from PC"
        return ( 
            <div>
                <p>Parent C</p>
                {/*Passage de la proprieté "message" au composant enfant*/}
                <Child message={messageFromParent}/>
            </div>
         );
    }
}
 
export default Parent;