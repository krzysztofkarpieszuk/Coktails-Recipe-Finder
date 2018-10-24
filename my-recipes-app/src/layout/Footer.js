import React from 'react';
// import ReactDOM from 'react-dom';
// import {
// HashRouter,
// Route,
// Link,
// Switch,
// NavLink,
// } from 'react-router-dom';


class Footer extends React.Component {
   constructor() {
       super()
   }

   render() {
    return (
        <footer className="app-footer">
        <div className="app-footer__container container">
            <p className="app-footer__copy">Copyright &copy; 2018 Krzysztof Karpieszuk </p>
            <a href="" className="app-footer__about-link">About Author</a>
            <a href="" className="app-footer__github-app-link"><i className="fab fa-github"></i></a>
        </div>
        </footer>
    )
   }
}

export default Footer;
