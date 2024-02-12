import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
             <p>Child C</p>
              <p>Message Received prop from my parent : {this.props.message}</p>

            </div>
           
        );
    }
}
 
export default Child;