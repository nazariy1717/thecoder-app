import React from 'react';

class TextScramble extends React.Component{

    constructor(props){
        super(props);
    }

    chars = '!<>-_\\/[]{}—=+*^?#________';


    render(){
        return(
            <div className="text" >

                { this.phrases }
            </div>
        )
    }
}

export default TextScramble;