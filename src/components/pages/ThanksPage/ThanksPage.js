import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './thanks-page.scss';

class ThanksPage extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div>
                <div className="thanks-page display-table">
                    <div className="display-table__cell">
                        <div className="container">
                            <h1 className="thanks-page__title">Thank You!</h1>
                            <p className="thanks-page__txt">We will contact you as soon as possible</p>
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

export default withRouter(ThanksPage);