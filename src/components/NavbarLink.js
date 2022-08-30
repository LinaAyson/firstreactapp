import React from "react";
import { Link } from "react-router-dom";

class NavbarLink extends React.Component {
    render() {
        return <li className='text-xl font-semibold text-gray-200 hover:text-gray-300'>
            <Link to={this.props.url}>{this.props.name}</Link>
        </li>;
    }
}
export default NavbarLink;
