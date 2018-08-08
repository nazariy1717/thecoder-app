import React from 'react';


class pageScreen extends React.Component{

    // constructor(props) {
    //     super(props);
    //     // this.submit = this.submit.bind(this);
    // }


    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");

        let dotsPerCircle=160;

        let interval=(Math.PI*2)/dotsPerCircle;

        let centerX=150;
        let centerY=150;
        let radius=200;

        for(let i=0;i<dotsPerCircle;i++){

            let desiredRadianAngleOnCircle = interval*i;

            var x = centerX+radius*Math.cos(desiredRadianAngleOnCircle);
            var y = centerY+radius*Math.sin(desiredRadianAngleOnCircle);

            context.beginPath();
            context.arc(x,y,1,0,Math.PI*2);
            context.closePath();
            context.fill();

        }
    }


    render(){
        return(
            <div className="pageScreen display-table ">
                <div className="display-table__cell">
                    <div className="container">
                        <canvas ref="canvas" width={640} height={425}></canvas>
                        <h1 className="page-title">розробка сайтів</h1>
                    </div>
                </div>



            </div>
        )
    }
}

export default pageScreen;