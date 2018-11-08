import React from 'react';
import './blog-wrap.scss'
import { Helmet } from "react-helmet";

import BlogCategoriesList from '../../blog/BlogCategoriesList'
import BlogItem from '../../blog/BlogItem'

import {isMobile} from 'react-device-detect';
import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class BlogPage extends React.Component{

    constructor(props) {
        super(props);
        this.controller = null;
        this.state = {
            posts:  [
                {
                    "id": 1,
                    "url": "/blog/Digital-Marketing",
                    "title": "Digital Marketing",
                    "description_short": "1We launched over 50 web projects and know what it takes to start your business successfully",
                    "date": "10.10.2018",
                    "category": ["Design","Development"],
                    "image": "http://www.offscreen.be/sites/default/files/images/movie/fight-club-3.jpg",
                },
                {
                    "id": 2,
                    "url": "/blog/Media-Marketing",
                    "title": "Social Media Marketing",
                    "description_short": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur dicta distinctio natus rerum.",
                    "date": "11.10.2018",
                    "category": ["Development"],
                    "image": "http://www.offscreen.be/sites/default/files/images/movie/fight-club-3.jpg",
                },
                {
                    "id": 3,
                    "url": "/blog/Email-Marketing",
                    "title": "Email Marketing",
                    "description_short": "3We olofrds fd over 50 web projects and know what it takes to start your business successfully",
                    "date": "11.10.2018",
                    "category": ["Company news"],
                    "image": "http://www.offscreen.be/sites/default/files/images/movie/fight-club-3.jpg",
                },
            ]
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.doAnimate();
    }

    doAnimate = () =>{
        if(!isMobile) {
            let timeline = new TimelineMax();
            let t1 = TweenMax.staggerFrom( document.querySelectorAll('.blog-wrap__title span'), 0.2, {
                opacity: 0,
                y: 55
            }, 0.03);
            let t2 = TweenMax.staggerFrom( document.querySelectorAll('.blog-categories-list__link'), 0.2, {
                opacity: 0,
                y: 55
            }, 0.1);
            let t3 = TweenMax.staggerFrom( document.querySelectorAll('.blog-item'), 0.2, {
                opacity: 0,
                y: 55
            }, 0.1);
            timeline.add(t1).add(t2).add(t3);
            this.controller = new ScrollMagic.Controller();
            let scene = new ScrollMagic.Scene({
                offset:  0,
                triggerElement: '.blog-wrap',
                reverse: false,
                triggerHook: .7,
            });
            scene.setTween(timeline);
            scene.addTo(this.controller);
        }
    }

    componentWillUnmount(){
        this.controller.destroy();
    }

    render(){
        return(
            <section className="blog-wrap">

                <Helmet>
                    <title>Blog the coder </title>
                    <meta name="description" content="Blog the coder " />
                    <meta property="og:title" content="Blog the coder " />
                    <meta property="og:description" content="Blog the coder "/>
                    <meta property="og:url" content="https://www.thecoderdev.com/blog"/>
                </Helmet>
                <div className="container">
                    <div className="row m-row align-justify">
                        <div className="column">
                            <div className="title-box blog-wrap__title">
                                <p>
                                    <span>B</span>
                                    <span>l</span>
                                    <span>o</span>
                                    <span>g</span>
                                    <span className="sub">w</span>
                                    <span className="sub">q</span>
                                    <span className="sub">s</span>
                                    <span className="sub">x</span>
                                    <span className="sub">z</span>
                                </p>
                                <p>
                                    <span className="sub">v</span>
                                    <span className="sub">s</span>
                                    <span className="sub">h</span>
                                    <span className="sub">i</span>
                                    <span className="sub">k</span>
                                    <span className="sub">j</span>
                                    <span className="sub">g</span>
                                    <span className="sub">d</span>
                                    <span className="sub">j</span>
                                    <span className="sub">l</span>
                                </p>
                                <h1 className="title-box__hidden">Blog</h1>
                            </div>
                        </div>
                        <div className="column">
                            <BlogCategoriesList />
                        </div>
                    </div>
                    <div className="blog-wrap__content">
                        <div className="row m-row">
                            {
                                this.state.posts.map((item, index) => {
                                    return <BlogItem data={item} key={index}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogPage;


