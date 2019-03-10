
// class components
//props(properties) = transfer data dari parent ke child

import React from 'react'
class Footer extends React.Component{
    state = {number:1}
    handleState=()=>{
        var nomor=1;
        this.setState({number:this.state.number+nomor})
    }
    render(){
        return(
            <div style={{position:'fixed', left:0,bottom:0,height:'100px',backgroundColor:'black',width:'100%'}}>
                
            </div>
        )
    }
}

export default Footer

//function components
