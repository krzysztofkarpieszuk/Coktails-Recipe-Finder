import React from 'react';

function Footer() {
    return (
        <footer className="app-footer">
            <div className="container">
                <p className="app-footer__copy">Copyright &copy; {new Date().getFullYear()} Krzysztof Karpieszuk </p>
                <a target="_blank" rel="noreferrer noopener"
                   href="https://github.com/krzysztofkarpieszuk/Drinkello"
                   className="app-footer__link" ><i className="fab fa-github"></i></a>
            </div>
        </footer>
    )
}

export default Footer;
