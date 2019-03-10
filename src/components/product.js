import React from 'react'
import Axios from 'axios'


class Product extends React.Component{
    state={user : 'Seto', listProduct:[]}



    componentDidMount(){
        //setelah render selesai
        // console.log('Ini Did Mount '+ this.state.user)
        this.getProduct();
    }

    getProduct=()=>{
        Axios.get('http://localhost:2000/product')
        .then((res)=>
            this.setState({listProduct : res.data})
        )

        // .then((res)=>console.log(res.data[1].harga))
        .catch((err)=>console.log(err.message))
        
    }

    renderProduct=()=>{
        var jsx= this.state.listProduct.map((val)=>{
            return (
                <div>
                    <h1>{val.nama}</h1>
                    <h3>{val.harga}</h3>
                </div>
            )
        })
        return jsx;
    }
    // componentWillMount(){
    //     //ke trigger sebelum render
    //     // this.setState({user:'Yayan'});
    //     console.log('Ini Will Mount '+ this.state.user)
    // }
    // fn =()=>{
    //     console.log('render')
    // }
    // componentDidUpdate(){ //setelah ada setstate /perubhahan dan setelah render
    //     console.log('ini Did Update '+this.state.user)
    // }
    // componentWillUpdate(){ //setelah ada setstate / perubahan dan sebelum render
    //     console.log('ini Will Update '+this.state.user)
    
    // }
    fnSetState=()=>{
        this.setState({user:'joni'})
    }
    render(){
        return (
            <div>
                <h1>Products</h1>
                {this.renderProduct()}
                <input type='button' value='setState' onClick={this.fnSetState}/>
                {/* {this.fn()} */}
            </div>
        )
    }
}

export default Product