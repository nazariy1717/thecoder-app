import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import './error-page.scss';

class NotFoundPage extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>404 PAGE NOT FOUND</title>
                    <meta name="description" content="Our company is your trusted partner in creative website development, UX/UI design and branding. With specialists in the USA and overseas, your cost is guaranteed to be very competitive." />
                    <meta property="og:title" content="404 PAGE NOT FOUND" />
                    <meta property="og:description" content="Our company is your trusted partner in creative website development, UX/UI design and branding. With specialists in the USA and overseas, your cost is guaranteed to be very competitive."/>
                    <meta property="og:url" content="https://www.thecoderdev.com"/>
                </Helmet>
                <div className="error-page display-table">
                    <div className="display-table__cell">
                        <div className="container">
                            <h1 className="error-page__title">404</h1>
                            <p className="error-page__txt">PAGE NOT FOUND</p>
                            <Link to="/" className="btn btn-primary m-auto">
                                <i className="btn-primary__line btn-primary__line-1"></i>
                                <i className="btn-primary__line btn-primary__line-2"></i>
                                <span className="btn-primary__txt">Go to main page</span>
                                <span className="btn-primary__txt">Go to main page</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFoundPage);