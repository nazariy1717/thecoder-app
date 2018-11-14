import React from "react";
import "./images_list.scss";
import ReactLoading from "react-loading";


export default  class ImagesList extends React.Component{
    constructor (props) {
        super(props);
        this.copyClipBoard = this.copyClipBoard.bind(this);
    }

    copyClipBoard(text){ navigator.clipboard.writeText(text); }

    render(){
        let array = this.props.imageArray.reverse().map((item, key) => (
                <li className="editor-images-list__item" key={key} >
                    <img src={item.imageUrl} alt=""/>
                    <span className="editor-images-list__remove" onClick={this.props.removeHandler.bind(this, item._id)}>X</span>
                    <span className="editor-images-list__copy" onClick={this.copyClipBoard.bind(this, item.imageUrl)}>copy</span>
                </li>
            ));
        return(
            <div className="editor-images-list">
                { (this.props.loading) ?
                    <div className="editor-images-list__loader">
                        <ReactLoading  height={'15%'} width={'15%'} />
                    </div>
                    : ''
                }
                <span className="editor-images-list__title">Images list</span>
                <div>
                    <label className="editor-images-list__btn" htmlFor="uploadImageFile">Upload image</label>
                    <input type="file" onChange={this.props.onChangeHandler} id="uploadImageFile" className="hidden" />
                </div>
                <ul>{array}</ul>
            </div>
        )
    }
}

