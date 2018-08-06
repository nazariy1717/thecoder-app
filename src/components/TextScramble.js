import React from 'react';

class TextScramble extends React.Component{

    constructor(props){
        super(props);
    }

    phrases = this.props.text;
    chars = '!<>-_\\/[]{}—=+*^?#________';

    setArray(){
       const phrasesArray = this.props.text;
       const phrasesArrayLength = phrasesArray.length;

        console.log(phrasesArray);
        console.log(phrasesArrayLength);
        // chars
        for (let i = 0; i < phrasesArray[0].length; i++) {
            // console.log(phrasesArray[0].charAt(i));

        }
    }

    render(){
        this.setArray();
        return(
            <div className="text" >

                { this.phrases }
            </div>
        )
    }
}

export default TextScramble;