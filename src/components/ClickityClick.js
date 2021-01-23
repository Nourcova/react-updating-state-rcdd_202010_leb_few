import React from 'react';

class ClickityClick extends React.Component{
  constructor(){
    super();
    
    this.state={
      hasBeenClicked:false
    };
  }
  
  handleClick=()=>{
    this.setState({
      hasBeenClicked:true
    })
  };
  
  render(){
    return(
      <div>
        <p> I have {this.state.hasBeenClicked ? null  : 'not'}</p>
        <button onClick={handleClick}> Click me!</button>
      </div>
      );
  }
}

export default ClickityClick;