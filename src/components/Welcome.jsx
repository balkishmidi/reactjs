import React from 'react';


class Welcome extends React.Component{
    state ={
        txt:"montext",
        count:1,
        departs:[
            {id:1,nom:"info"},
            {id:2,nom:"business"},
            {id:3,nom:"mecan"},
        ],
    }
    changeState= ()=>{
        this.setState({txt:"Bonjornoooo"});

    }

    render(){
        return(
            <>
            {this.state.txt}
       {this.state.departs.map((x) => <li key={x.id}>{x.nom}</li>)}
<button onClick={this.changeState}>
Click
</button>
            </>
        );
    }
}
export default Welcome;