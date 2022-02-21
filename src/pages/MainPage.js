import React, { Fragment } from 'react';

import { GetMobileApp } from '../components/GetMobileApp';
import { InstagramLogin } from '../components/InstagramLogin';

export const MainPage = props => {   
	return (
        <Fragment>
            <div className="left">
                <div className="leftInner">
                    <img alt="" src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
                </div>
            </div>
            <div className="loginBoxWrapper">
                <div className="loginBoxInner">
                <h1 className="coreSpriteLoggedOutWordmark">Instagram</h1>
                <InstagramLogin />
                </div>
                <div className="noAccount">
                    <p>
                        Don't have an account? <a data-testid="sign-up-link" href="/accounts/emailsignup/" tabIndex="0">
                            <span>Sign up</span>
                        </a>
                    </p>
                </div>
                <GetMobileApp />
            </div>
        </Fragment>
	);
};