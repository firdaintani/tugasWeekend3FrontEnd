import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import {Link} from 'react-router-dom';
  import {connect} from 'react-redux';
 
  class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
         <Link to='/'> <NavbarBrand href="/">{this.props.nama}</NavbarBrand> </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {/* <NavItem>
                <NavLink style={{color:'white'}}>{this.props.jml_teks} word</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink >Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Register</NavLink>
              </NavItem>
              <NavItem>
                <Link to='/products'> <NavLink>Product</NavLink></Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //ngeget dariparent dijadiin props
  // return {data_user:state.user} //state.user-->ngeakses  user:UserState di index.js reducer. UserState didapet dari userGlobal a.k.a objek dgn isi username sama email
  return {nama : state.user.username,
          email: state.user.email,
      buah: state.product.namaProduct,
    jml_teks: state.teks.jml_teks,
    jml_todo : state.todo.todoCount}

}
export default connect(mapStateToProps)(Example)