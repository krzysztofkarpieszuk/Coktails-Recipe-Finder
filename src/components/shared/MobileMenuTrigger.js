import React from 'react';

export default function MobileMenuTrigger(props) {
    const openClass = props.mobileMenuStatus ? 'open' : '';

    return (
        <div className="mobile-menu-trigger" onClick={props.toggleMobileMenu}>
            <div className={`mobile-menu-trigger__wrapper ${openClass}`}>
                <div className="mobile-menu-trigger__line half start" />
                <div className="mobile-menu-trigger__line" />
                <div className="mobile-menu-trigger__line half end" />
            </div>
        </div>
    )
}
