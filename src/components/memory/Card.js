import React, { Component } from 'react';

class Card extends Component {
    clicked(card) {
        if (!this.props.matched) {
            this.props.click(card);
        }
    }
    
    render () {
        let classes = ['rounded', 'h-48', 'card'];
        if (!this.props.close) {
            classes.push('flipped');
        }
        if(this.props.matched) {
            classes.push('matched');
        } 

        return (
            <div className="w-1/6 px-1 py-1 flip">
                <div className={classes.join(' ')} onClick={() => this.clicked(this.props.emotion)}>
                    <div className="face front rounded text-center bg-teal-dark shadow">
                        <div className="text-center mt-8">
                            <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                        </div>
                    </div>
                    <div className="face back rounded bg-teal-lighter shadow">
                        <div className="text-center mt-3">
                            <p><img src={"/images/" + this.props.emotion + ".svg"} className="w-32" alt="emotion" /></p>
                            <p className="kid font-semibold text-xl mt-3">{this.props.emotion}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;