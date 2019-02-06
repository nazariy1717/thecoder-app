import React from 'react';
import './tools-page.scss'
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";


class ToolPage extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <section className="tools-wrap">
                <Helmet>
                    <title>Tool Name</title>
                    <meta name="description" content="" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content=""/>
                    <meta property="og:url" content="https://www.thecoderdev.com/tools/Tool-Name"/>
                </Helmet>
                <div className="container">
                    <ul className="breadcrumbs">
                        <li className="breadcrumbs__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <Link to="/" className="breadcrumbs__link" itemProp="url">Main</Link>
                        </li>
                        <li className="breadcrumbs__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <Link to="/tools" className="breadcrumbs__link" itemProp="url">Tools</Link>
                        </li>
                        <li className="breadcrumbs__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <span className="breadcrumbs__link active">Tool Name</span>
                        </li>
                    </ul>

                    <div className="tool">
                        <div className="tool__top">
                            <div className="row m-row">
                                <div className="column col-lg-4">
                                    <div className="tool__logo">
                                        <img src="https://testingsite.pp.ua/uploads/2019-01-23T15-20-56.976Z_%D0%9E%D0%91%D0%9A%D0%9B%20%D0%9D%D0%90%20%D0%91%D0%9B%D0%9E%D0%93.jpg" alt=""/>
                                        <a href="http://documents.thecoderdev.com/" className="btn btn-primary m-auto">
                                            <i className="btn-primary__line btn-primary__line-1"></i>
                                            <i className="btn-primary__line btn-primary__line-2"></i>
                                            <span className="btn-primary__txt">Sign In</span>
                                            <span className="btn-primary__txt">Sign In</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="column col-lg-8">
                                    <div className="tool__name title-box">
                                        <h1 className="title-box__inner">Tool Name Here</h1>
                                    </div>
                                    <span className="tool__subtitle">The Coder Company</span>
                                    <div className="tool__desc">
                                        <p className="app-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ex in iste iure nihil nostrum quasi voluptate. Aut, consequuntur doloremque dolores labore obcaecati porro quia soluta suscipit. Adipisci cumque ex fuga laboriosam natus nesciunt tempora temporibus, ullam vel voluptatem! Ad ipsam, ullam? Aliquid blanditiis consequuntur distinctio dolorum exercitationem nesciunt odio odit perferendis ratione voluptates? Aut culpa dolorum facere illum necessitatibus nemo reprehenderit? Asperiores et explicabo id inventore iusto nemo quod, quos sapiente tempora voluptatibus. Blanditiis eligendi facilis illo nihil odio quibusdam repellendus soluta, veniam vero voluptas. Accusamus at beatae facere id pariatur qui reprehenderit sit. Ducimus numquam repellat reprehenderit temporibus?</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tool__bottom">
                            <span className="app-txt tool__title">Screenshots</span>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}


export default ToolPage;