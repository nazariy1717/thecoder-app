import React from "react";
import "./images_list.scss";

export default class ImagesList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="editor-images-list">
                <ul>
                    <li className="editor-images-list__item">
                        <span>dasdasd</span>
                        <img src="" alt=""/>
                    </li>
                </ul>
                <div>
                    <label className="editor-images-list__btn" htmlFor="uploadImageFile">Upload image</label>
                    <input type="file" onChange={this.props.onChangeHandler} id="uploadImageFile" className="hidden" multiple/>
                </div>
            </div>
        )
    }
}