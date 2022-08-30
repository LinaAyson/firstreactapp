import React from "react";
import ContactMe from "./Contactform";
import ContactSocial from "./ContactSocial";


class Users extends React.Component {
    render() {
        return <div className="flex flex-col items-center justify-center h-screen bg-indigo-800">
            <h1 className="text-4xl font-extrabold tracking-wide text-gray-100 hover:tracking-tight lg:text-6xl sm:text-5xl">Kontakta mig</h1>
            <div className="mt-5 animate-bounce"><svg className="w-16 h-16 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="15" x2="12" y2="19" />  <line x1="8" y1="15" x2="12" y2="19" /></svg></div>
            <ContactMe />
            <ContactSocial />
        </div>
    }
}
export default Users;
