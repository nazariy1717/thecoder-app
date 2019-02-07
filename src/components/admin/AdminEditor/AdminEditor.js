import React from "react";
import {Component} from "react";
import { connect } from 'react-redux'
import MediumEditor from 'medium-editor';
import Notifications, {notify} from 'react-notify-toast';
import AdminHeader from "../AdminHeader/AdminHeader";
import {adminAddArticle, addImages, loadImages, removeImage} from "../../../actions/articles";
import ReactLoading from 'react-loading';
import ImagesList from './ImagesList';

import './../../../../node_modules/medium-editor/dist/css/medium-editor.min.css'
import './../../../../node_modules/medium-editor/dist/css/themes/default.min.css'
import './editor.scss'


const mapStateToProps = state => {
    return {
        articles:{
            images: state.articles.images
        }
    }
};

class AdminEditor extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: {
                title: '',
                titleUkr: '',
                description: '',
                descriptionUkr: '',
                text: '',
                textUkr: '',
                image: null,
            },
            errors: [],
            loading: false,
            imageLoader: false
        };
        this.previewImg = this.previewImg.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.validate = this.validate.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.imageDelete = this.imageDelete.bind(this);
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
            fd.append('titleUkr', article.titleUkr);
            fd.append('descriptionUkr', article.descriptionUkr);
            fd.append('textUkr', article.textUkr);
            fd.append('claps', 0);
            fd.append('image', article.image, article.image.name);
            this.props.adminAddArticle(fd)
                .then(() => {
                    this.setState({
                        article: {
                            title: '',
                            description: '',
                            text: '',

                            titleUkr: '',
                            descriptionUkr: '',
                            textUkr: '',

                            image: null,
                        },
                        loading: false
                    });
                    document.getElementById('image_preview').src = "";
                    document.querySelectorAll('.medium-editable')[0].innerHTML = '';
                    document.querySelectorAll('.medium-editable')[1].innerHTML = '';
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

    uploadImage(e){
        if(e.target.files.length){
            let fd = new FormData();
            fd.append('image', e.target.files[0], e.target.files[0].name);
            this.setState({imageLoader: true});
            this.props.addImages(fd).then(() => {
                this.setState({imageLoader: false});
                notify.show("Image uploaded", "success")
            });
        }
    }

    imageDelete(id){
        this.props.removeImage(id).then(()=>notify.show("Image deleted", "success"));
    }

    validate(data){
        const errors = {};
        if(!data.title){ errors.title = "Required field"; }
        if(!data.titleUkr){ errors.titleUkr = "Required field"; }
        if(!data.text){errors.text = "Required field"; }
        if(!data.textUkr){errors.textUkr = "Required field"; }
        if(!data.image){errors.image = "Required field"; }
        return errors;
    }

    componentDidMount () {
        console.log(document.querySelectorAll('.medium-editable'));
        this.props.loadImages();
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
                        description: `${editor.getContent(0).substring(0,300).toString()}`,
                        descriptionUkr: `${editor.getContent(1).substring(0,300).toString()}`,
                        text: editor.getContent(0),
                        textUkr: editor.getContent(1)
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
                            <div className="row m-row">
                                <div className="column col-lg-6">
                                    <h2 className="admin-editor__head-subtitle">English</h2>
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
                                        <textarea className="medium-editable">
                                        </textarea>
                                        { errors.text && <span className="form__error">{errors.text}</span>    }
                                    </div>
                                </div>
                                <div className="column col-lg-6">
                                    <h2 className="admin-editor__head-subtitle">Ukrainian</h2>
                                    <div className="form__group-30">
                                        <textarea className="admin-editor__title"
                                                  name="titleUkr"
                                                  id="editor-titleUkr"
                                                  value={article.titleUkr}
                                                  onChange={this.onChangeHandler}
                                                  placeholder="Заголовок">
                                        </textarea>
                                        { errors.title && <span className="form__error">{errors.titleUkr}</span>    }
                                    </div>
                                    <div className="form__group-50">
                                        <textarea
                                            className="medium-editable">
                                        </textarea>
                                        { errors.text && <span className="form__error">{errors.textUkr}</span>    }
                                    </div>
                                </div>
                            </div>


                            <button type="submit" className="btn btn-secondary admin-editor__btn">save</button>
                        </form>
                        <ImagesList onChangeHandler={this.uploadImage}
                                    imageArray={this.props.articles.images}
                                    removeHandler={this.imageDelete}
                                    loading={this.state.imageLoader} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {adminAddArticle, addImages, loadImages, removeImage})(AdminEditor);