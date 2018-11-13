import React from "react";
import "./images_list.scss";

export default class ImagesList extends React.Component{


    render(){
        console.log(this.props.imageArray);
        let array = this.props.imageArray.map((item, key) =>
            (
                <li className="editor-images-list__item" key={key}>
                    <span>http://localhost:8080/uploads/{item.url}</span>
                </li>
            )
        );
        return(
            <div className="editor-images-list">
                <ul>{array}</ul>
                <div>
                    <label className="editor-images-list__btn" htmlFor="uploadImageFile">Upload image</label>
                    <input type="file" onChange={this.props.onChangeHandler} id="uploadImageFile" className="hidden"/>
                </div>
            </div>
        )
    }
}