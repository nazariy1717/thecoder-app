import React from "react";
import {Component} from "react";
import { connect } from 'react-redux'
import MediumEditor from 'medium-editor';
import Notifications, {notify} from 'react-notify-toast';
import AdminHeader from "../AdminHeader/AdminHeader";
import {adminAddArticle} from "../../../actions/articles";
import ReactLoading from 'react-loading';

import './../../../../node_modules/medium-editor/dist/css/medium-editor.min.css'
import './../../../../node_modules/medium-editor/dist/css/themes/default.min.css'
import './editor.scss'

class AdminEditor extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: {
                title: '',
                description: '',
                text: '',
                image: null,
            },
            errors: [],
            loading: false
        };
        this.previewImg = this.previewImg.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.validate = this.validate.bind(this);
    }

    onChangeHandler(e){
        this.setState({ article: {  ...this.state.article, [e.target.name]: e.target.value } })
    }

    submitHandler(e){
        e.preventDefault();
        const errors = this.validate(this.state.article);
        this.setState({ errors });
        const article = this.state.article;
        if(Object.keys(errors).length === 0){
            this.setState({loading: true});
            let fd = new FormData();
            fd.append('title', article.title);
            fd.append('description', article.description);
            fd.append('text', article.text);
            fd.append('claps', 0);
            fd.append('image', article.image, article.image.name);
            this.props.adminAddArticle(fd)
                .then(() => {
                    this.setState({
                        article: {
                            title: '',
                            description: '',
                            text: '',
                            image: null,
                        },
                        loading: false
                    });
                    document.getElementById('image_preview').src = "";
                    document.querySelector('.medium-editable').innerHTML = '';
                    notify.show("Post was created successfully", "success")
                })
                .catch(err => console.log('There was an error:' + err));
        }
    }

    previewImg (e) {
        this.setState({ article: { ...this.state.article, image: e.target.files[0] }});
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('image_preview').src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    validate(data){
        const errors = {};
        if(!data.title){ errors.title = "Required field"; }
        if(!data.text){errors.text = "Required field"; }
        if(!data.image){errors.image = "Required field"; }
        return errors;
    }

    componentDidMount () {
        const editor = new MediumEditor(".medium-editable",{
            autoLink: true,
            delay: 1000,
            targetBlank: true,
            toolbar: {
                buttons: ['bold', 'italic', 'quote', 'underline', 'anchor', 'h1', 'h2', 'h3', 'orderedlist', 'unorderedlist', 'image', 'html', 'justifyCenter', 'justifyRight'],
                diffLeft: 25,
                diffTop: 10,
            },
            anchor: {
                placeholderText: 'Write a post',
                customClassOption: 'btn',
                customClassOptionText: 'Create Button'
            },
            paste: {
                cleanPastedHTML: true,
                cleanAttrs: ['style', 'dir'],
                cleanTags: ['label', 'meta'],
                unwrapTags: ['sub', 'sup']
            },
            anchorPreview: {
                hideDelay: 300
            },
        });
        editor.subscribe('editableInput', (ev, editable) => {
            if(typeof document !== 'undefined')
                this.setState({
                    article:{
                        ...this.state.article,
                        description: `${editor.getContent(0).substring(0,30).toString()}`,
                        text: editor.getContent(0)
                    }
                });
        })
    }

    render(){
        let article = this.state.article;
        let errors = this.state.errors;

        return(
            <div className="admin-wrapper">
                <AdminHeader />
                <Notifications />

                { (this.state.loading) ?
                    <div className="admin-editor__loader">
                        <ReactLoading  height={'5%'} width={'5%'} />
                    </div>
                    : ''
                }
                <div className="admin-content">
                    <div className="admin-editor">
                        <h1 className="admin-editor__head-title">Create a post</h1>
                        <form className="editor-form main-editor" onSubmit={this.submitHandler}>
                            <div className="row m-row align-middle">
                                <div className="column col-lg-4">
                                    <div className="form__group-30">
                                        <label className="admin-editor__picture-upload" htmlFor="imageFile">Choose image</label>
                                        <input type="file" onChange={this.previewImg} id="imageFile" className="hidden"/>
                                    </div>
                                </div>
                            </div>
                            <div className={article.image != null ? 'file-upload-previewer' : 'file-upload-previewer --placeholder'}>
                                <img src="" alt="" id="image_preview"/>
                                { errors.image && <span className="form__error">{errors.image}</span>    }
                            </div>
                            <div
                                className="existing-img-previewer"
                                id="existing-img-previewer">
                            </div>
                            <div className="form__group-30">
                                <textarea className="admin-editor__title"
                                          name="title"
                                          id="editor-title"
                                          value={article.title}
                                          onChange={this.onChangeHandler}
                                          placeholder="Title">
                                </textarea>
                                { errors.title && <span className="form__error">{errors.title}</span>    }
                            </div>
                            <div className="form__group-50">
                                <textarea className="medium-editable"
                                          id="medium-editable">
                                </textarea>
                                { errors.text && <span className="form__error">{errors.text}</span>    }
                            </div>
                            <button type="submit" className="btn btn-secondary admin-editor__btn">save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {adminAddArticle})(AdminEditor);