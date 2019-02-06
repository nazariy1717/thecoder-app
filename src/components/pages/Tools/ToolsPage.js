import React from 'react';
import './tools-page.scss'
import ToolsData from './ToolsData';

import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";


class ToolsPage extends React.Component{

    componentDidMount(){
        console.log(ToolsData);
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <section className="tools-wrap">
                <Helmet>
                    <title>Tools - The Coder</title>
                    <meta name="description" content="" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content=""/>
                    <meta property="og:url" content="https://www.thecoderdev.com/tools"/>
                </Helmet>
                <div className="container">
                    <div className="tools-wrap__title title-box">
                        <h1 className="title-box__inner">The Coder <br/> Tools</h1>
                    </div>
                    <ul className="breadcrumbs">
                        <li className="breadcrumbs__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <Link to="/" className="breadcrumbs__link" itemProp="url">Main</Link>
                        </li>
                        <li className="breadcrumbs__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <span className="breadcrumbs__link active">Tools</span>
                        </li>
                    </ul>
                    <p className="tools-wrap__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa inventore praesentium unde. Aperiam consequatur ex explicabo minus modi nostrum perferendis, quasi quidem repellat repudiandae saepe temporibus ullam veniam voluptates.</p>
                    <div className="tools-wrap__content">
                        <div className="row m-row">
                            <div className="column col-md-4 col-sm-6 col-xs-12">
                                <div className="tool-item">
                                    <span className="tool-item__title">name of tools</span>
                                    <div className="tool-item__content" style={{backgroundImage: 'url(https://testingsite.pp.ua/uploads/2019-01-23T15-20-56.976Z_%D0%9E%D0%91%D0%9A%D0%9B%20%D0%9D%D0%90%20%D0%91%D0%9B%D0%9E%D0%93.jpg)'}}>
                                        <div className="tool-item__overlay">
                                            <ul className="tool-item__list">
                                                <li className="tool-item__list-item">
                                                    <a href="http://documents.thecoderdev.com/" className="tool-item__list-link"
                                                       target="_blank" rel="noopener noreferrer nofollow">
                                                        <i className="icon-sign-in"></i>
                                                        <span>Sign In</span>
                                                    </a>
                                                </li>
                                                <li className="tool-item__list-item">
                                                    <Link to="/tools/tool-name" className="tool-item__list-link">
                                                        <i className="icon-info-1"></i>
                                                        <span>Details</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="tools-wrap__txt --seo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam aspernatur consequatur corporis cupiditate distinctio dolorum, eaque error esse explicabo illo iste laborum maiores perspiciatis possimus quia tenetur, voluptates! Asperiores, reprehenderit, vitae. Delectus dolorem ipsam iure libero numquam praesentium quia recusandae reiciendis repellendus totam. Accusantium ad animi autem commodi eaque eius, in, itaque molestias obcaecati quae recusandae, ut vitae. Alias dolores ea facilis fuga in ipsa quae saepe! Accusamus alias architecto, cumque debitis deserunt dolores dolorum error fugit in labore minima molestiae necessitatibus nostrum numquam odio perferendis quae qui quibusdam quidem quisquam, reprehenderit soluta totam ullam unde vel veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa inventore praesentium unde. Aperiam consequatur ex explicabo minus modi nostrum perferendis, quasi quidem repellat repudiandae saepe temporibus ullam veniam voluptates.</p>
                </div>
            </section>
        )
    }
}


export default ToolsPage;