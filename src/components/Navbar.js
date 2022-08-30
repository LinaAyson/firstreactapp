import React from "react";
import NavbarLink from "./NavbarLink";

class Navbar extends React.Component {
    render() {

        const linaslogo = require('./images/linaslogo.png');

        return <nav className="flex justify-between w-full bg-indigo-900 p-7 h-35">
            <div className="my-auto text-white">
                <a href="https://github.com/LinaAyson"><img src={linaslogo} width="45" alt="Logo" /></a>
            </div>
            <ul className="flex my-auto space-x-4">
                <NavbarLink url='/' name='About me' />
                <NavbarLink url='/about' name='My works' />
                <NavbarLink url='/users' name='Contact me' />
            </ul>
        </nav>;
    }
}
export default Navbar;
