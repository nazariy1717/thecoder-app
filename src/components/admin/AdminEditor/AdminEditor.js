import React from "react";
import {Component} from "react";
import { connect } from 'react-redux'
import MediumEditor from 'medium-editor';

import AdminHeader from "../AdminHeader/AdminHeader";
import './../../../../node_modules/medium-editor/dist/css/medium-editor.min.css'
import './editor.scss'

class AdminEditor extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article:{
                title: '',
                text: '',
                description: '',
                imgSrc: null,
            },
            loading: false
        };
        this.previewImg = this.previewImg.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    onChangeHandler(e){
        this.setState({
            article: {  ...this.state.article, title: e.target.value }
            })
    }
    submitHandler(e){
        e.preventDefault();
        console.log(this.state);

    }

    previewImg () {
        const file = this.refs.fileUploader.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('image_preview').src = e.target.result;
            this.setState({ article: {  ...this.state.article, imgSrc: file }})
        }.bind(this);
        reader.readAsDataURL(file);
    }

    componentDidMount () {
        const editor = new MediumEditor(".medium-editable",{
            autoLink: true,
            delay: 1000,
            targetBlank: true,
            toolbar: {
                buttons: ['bold', 'italic', 'quote', 'underline', 'anchor', 'h1', 'h2', 'h3', 'strikethrough', 'image', 'html', 'justifyCenter', 'justifyRight'],
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
                        description: `${editor.getContent(0).substring(0,30).toString()}...`,
                        text: editor.getContent(0)
                    }
                });
        })
    }

    render(){
        let article = this.state.article;

        return(
            <div className="admin-wrapper">
                <AdminHeader />
                <div className="admin-content">
                    <div className="admin-editor">
                        <form className="editor-form main-editor" autoComplete="off">
                            <div className={article.imgSrc != null ? 'file-upload-previewer' : 'file-upload-previewer hidden'}>
                                <img src="" alt="" id="image_preview"/>
                            </div>
                            <div className="existing-img-previewer" id="existing-img-previewer">
                            </div>
                            <div className="form__group">
                                <label className="admin-editor__picture-upload" htmlFor="file">img</label>
                            </div>
                            <div className="form__group-30">
                                <textarea className="admin-editor__title"
                                          id="editor-title"
                                          value={article.title}
                                          onChange={this.onChangeHandler}
                                          placeholder="Title">
                                </textarea>
                            </div>
                            <div className="form__group-30">
                                <textarea className="medium-editable"
                                          id="medium-editable">
                                </textarea>
                            </div>
                            <div className="hidden">
                                <input type="file" onChange={() => this.previewImg()} id="file" ref="fileUploader"/>
                            </div>

                            <button className="btn btn-secondary" onClick={this.submitHandler}>save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(AdminEditor);