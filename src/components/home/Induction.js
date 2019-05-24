import React, { Component } from 'react';
import { Player } from 'video-react';
import Back from '../utils/Back'

class Induction extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <div className="flex">
                    <Back link="/" />
                    <div className="w-1/3 px-2">
                    </div>
                    <div className="w-1/3 px-2">
                    </div>
                </div>

                <Player
                    playsInline
                    src="/induksi/induksi.mp4"
                    autoPlay="true"
                />
            </div>
        );
    }
}

export default Induction;