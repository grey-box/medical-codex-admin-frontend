import React from "react";
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
    const {translate} = useLanguage();
    return (
        <div id="footer">
            <style jsx>{`
                #footer {
                    background-color: grey;
                    width: 100%;
                    height: 20vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    margin-top: 35vh;
                }

                #footer div {
                    display: flex;
                    align-items: center;
                }

                #logo {
                    width: 100px;
                    height: auto;
                    margin-right: 20px;
                }

                span {
                    font-size: 18px;
                    color: white;
                    text-align: left;
                }
            `}</style>
            <div>
                <img id="logo" src="/images/logoGREY-BOX.jpg" alt="Grey-box logo"/>
                <span><strong>Grey-box</strong> {translate('footerGreybox')}</span>
            </div>
        </div>
    );
}

export default Footer;