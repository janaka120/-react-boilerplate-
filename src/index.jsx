import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<React.Fragment><h1>Avatarin</h1></React.Fragment>);
    }
}

ReactDOM.render(
    <Hello/>, document.getElementById("root")
);