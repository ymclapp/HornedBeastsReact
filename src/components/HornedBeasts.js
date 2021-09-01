import React from 'react'; 

// class component 
class HornedBeasts extends React.Component { 
 
  // render *method* 
  render() { 
  
    // return whatever you want to render 
    console.log(this.props);
      return <strong>{this.props.title} is shown here {this.props.imageURL} and is known for the saying {this.props.description}</strong>
    // return ( 
    //   <div id = "hornedBeasts">
    //     <h2>Horned Beasts</h2>
    //     <div>
        
    //     </div>

    //   </div> 
    // ) 
  } 
} 

export default HornedBeasts;