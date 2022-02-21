import React, { Fragment } from 'react';

export const Dashboard = props => {
    const renderAuthenticated = () => {
        if(sessionStorage.getItem('igLogin')) {
            return(
                <Fragment>
                    <p><span>Welcome</span> <strong>{sessionStorage.getItem('igLogin')}!</strong></p>
                </Fragment>
            );
        } else {
            return(
                <Fragment>
                    <p>You are not logged in. <a href="/">Click here to login.</a></p>
                </Fragment>
            );
        }
    };

	return (
        <div className="dashboard">
            <h2>Demo Dashboard</h2>
            {renderAuthenticated()}
        </div>
	);
};