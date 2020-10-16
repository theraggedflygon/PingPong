import React from 'react';
import corgi from '../images/corgi.jpg'

const About = () => {
    return (
        <React.Fragment> 
            <h1 style={{color: "white"}}>When I get around to actually updating this there will be information for interested parties. But for now all you need to know is that we are a bunch of college students playing ping pong with some of us taking it more seriously than we probably should.</h1>
            <h2 style={{color: "white"}}>For now I guess enjoy this beautiful picture of a baby corgi sneezing.</h2>
            <img src={corgi} alt="corgi" />
        </React.Fragment>
    );
}
 
export default About;