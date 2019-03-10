import React from 'react';
import { fnUbahUser } from '../1. actions'
import {connect} from 'react-redux'
import './../support/css/formcss.css'
//inline css

class Form extends React.Component{
    state={namauser : '', email : '', password: ''}

    handleButton = ()=>{
        var nama = this.refs.username.value;
        // var emailuser = this.refs.email_user.value;
        // var passuser = this.refs.pass_user.value;
        // // alert(emailuser)
        // this.setState({namauser:nama,email:emailuser,password:passuser});
        // alert(this.state.namauser)
        // this.setState({});
        // this.setState({});

        this.props.fnUbahUser(nama)
    }


    render(){
        // var hidden = {color:'red',fontSize:'30px'}

        return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-4 mt-4'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername" class='merah'>Username</label>
                            <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="username" placeholder="Enter username" ref='username' />
                          
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='email_user'/>
                            <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
                        </div>
                        <input type="button" className="btn btn-primary" onClick={this.handleButton}value='Submit'/>
                        {/* <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref='pass_user' />
                        </div> */}
                        
                        </form>

                    {/* </div>
                    <div className='col-6'>
                        <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={9} defaultValue={""} />
                            
                           

                        </div>

                        </form> */}
                    </div>

                </div>
                {/* <div class='row'>
                    <div class='col'>
                    <h2>{this.state.namauser}</h2> 
                    <h2>{this.state.email}</h2>
                    <h2>{this.state.password}</h2>   
                    </div>
                </div> */}
             </div>
         </div>
    )
}
}

//parameter pertama connect = mapstatetoprops / karena tidak memakai global state
export default connect(null,{fnUbahUser})(Form)