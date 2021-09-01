import React from 'react'; 
// class component 
export default class Main extends React.Component { 
  // render *method* 
  render() { 
          // return whatever you want to render 
    return ( 
      <div id = "main"> 
        {this.props.name}
        {this.props.img}
        {this}
      </div> 
    ) 
  } 
} 