import React from "react";
import {Component} from "react";
import { connect } from 'react-redux'
import MediumEditor from 'medium-editor';

import AdminSidebar from "../AdminSidebar/AdminSidebar";
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
                <AdminSidebar />
                <div className="admin-content">
                    <AdminHeader />

                    <div className="admin-editor">
                        <textarea id="medium-editable" className="medium-editable"></textarea>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(AdminEditor);