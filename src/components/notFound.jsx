import React from 'react';
import kelso from "../images/kelso.jpeg";

const NotFound = () => {
    return (
        <React.Fragment> 
            <h1 style={{color: "white"}}>Oops, your page wasn't found. This is probably your fault, but it also might be mine. While you may have not found your page, you did find this amazing picture of Kelso.</h1>
            <img src={kelso} alt="kelso" />
        </React.Fragment>
        );
}
 
export default NotFound;