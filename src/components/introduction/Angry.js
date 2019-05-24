import React, { Component } from 'react';
import Back from '../utils/Back'
import { Player } from 'video-react';

class Angry extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <div className="flex">
                    <Back link="/introduction" />
                    <div className="w-1/3 px-2">
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="rounded card w-56 h-64">
                            <div className="face front rounded text-center">
                                <div className="text-center mt-8">
                                    <img src={"/images/marah.svg"} className="w-32 mt-5" alt="emotion" />
                                    <p className="kid text-xl mt-3">Marah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Player
                    playsInline
                    src="/introduction/marah.mp4"
                    autoPlay="true"
                />
            </div>
        );
    }
}

export default Angry;