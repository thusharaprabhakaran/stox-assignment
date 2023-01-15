import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="stox-footer">
                <div className="stox-footer-layout-horizontal">
                    <div className="review">REVIEW</div>
                    <div className="contact">CONTACT</div>
                    <div className="account">ACCOUNT</div>
                </div>
                <div className="stox-footer-lang">
                    <img className="vector-icon" alt="" src="/assets/images/chevron-down.svg" />
                    <div className="stox-lang-container">
                        <b className="stox-lang-style">LANGUAGE :</b>
                        <span>
                            <span className="span4">{` `}</span>
                            <span className="stox-lang-style">EN €</span>
                        </span>
                    </div>
                </div>

                <div className="stox-footer-ph">
                    <p className="stox-ph-container">
                        <b className="stox-ph-style">Call </b>
                        <span className="stox-ph-child-style">020-2050738</span>
                    </p>
                    <p className="stox-ph-container">
                        <span className="stox-ph-child-style">Mon - Thu, 9:00 - 19:00</span>
                    </p>
                    <p className="stox-ph-child-container">
                        <span className="stox-ph-child-style">Fri, 9:00 - 18:00</span>
                    </p>
                </div>

                <div className="stox-footer-mail">
                    <b>
                        <span className="stox-mail-style">mail</span>
                        <span className="span2">{` `}</span>
                    </b>
                    <span className="stox-mail-style">onshallo@aceandtate.nl</span>
                </div>

                <div className="stox-footer-whatsapp">
                    <b className="stox-lang-style">whatsapp</b>
                    <span>
                        <span className="span">{` `}</span>
                        <span className="stox-lang-style">+31 6 33236677</span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Footer