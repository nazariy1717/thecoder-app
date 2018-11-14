import React from "react";
import "./images_list.scss";
import ReactLoading from "react-loading";

export default class ImagesList extends React.Component{

    render(){
        // console.log(this.props.imageArray);
        // let array = this.props.imageArray.map((item, key) =>
        //     (
        //         <li className="editor-images-list__item" key={key}>
        //             <span>http://localhost:8080/uploads/{item.url}</span>
        //         </li>
        //     )
        // );
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
                    <input type="file" onChange={this.props.onChangeHandler} id="uploadImageFile" className="hidden" multiple/>
                </div>
                {/*<ul>{array}</ul>*/}
            </div>
        )
    }
}