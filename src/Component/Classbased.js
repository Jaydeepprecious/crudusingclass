import React from "react";

class Classbased extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
          name:"jaydeep",
          work:"EMPOYEE",
          count:1,
          
        }
    }
    changeSubmit(){
          if(this.state.count%2!==0)
          {
            this.setState({name:"amit"});
          }
          else
          {
            this.setState({name:"jaydeep"});
          }
          this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.changeSubmit()}>Click here</button>
               
            </>
        )
    }
}
export default Classbased