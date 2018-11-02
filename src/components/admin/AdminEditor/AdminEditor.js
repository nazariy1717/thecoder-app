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
            title: '',
            text: '',
            description: '',
            imgSrc: null,
            loading: false
        };

    }
    componentDidMount () {
        const editor = new MediumEditor(".medium-editable",{
            autoLink: true,
            delay: 1000,
            targetBlank: true,
            toolbar: {
                buttons: [
                    'bold',
                    'italic',
                    'quote',
                    'underline',
                    'anchor',
                    'h1',
                    'h2',
                    'h3',
                    'strikethrough',
                    'image',
                    'html',
                    'justifyCenter',
                    'justifyRight'
                ],
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
            placeholder: {
                text: 'Tell your story'
            }
        })
    }
    render(){
        return(
            <div className="admin-wrapper">
                <AdminHeader />
                <div className="admin-content">
                    <div className="admin-editor">
                        <form className="editor-form main-editor" autoComplete="off">

                            <div className={this.state.imgSrc != null ? 'file-upload-previewer' : 'file-upload-previewer hidden'}>
                                <img src="" alt="" id="image_preview"/>
                            </div>
                            <div className="existing-img-previewer" id="existing-img-previewer">
                            </div>
                            <div className="form__group">
                                <span className="admin-editor__picture-upload" onClick={this.handleClick}>img</span>
                            </div>
                            <div className="form__group-30">
                                <textarea  className="admin-editor__title" id="editor-title" placeholder="Title"></textarea>
                            </div>
                            <div className="form__group-30">
                                <textarea className="medium-editable" id="medium-editable"></textarea>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(AdminEditor);