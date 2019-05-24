import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from '../utils/Back'

class Game extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <div className="px-2">
                    <div className="flex">
                        <Back link="/" />
                        <div className="w-1/3 px-2">
                        </div>
                        <div className="w-1/3 px-2">
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-1/3 px-2">
                            <Link to="/memory">
                                <div className="rounded card w-56 h-64">
                                    <div className="face front rounded text-center">
                                        <div className="text-center mt-8">
                                            <img src="https://image.flaticon.com/icons/svg/186/186006.svg" className="w-32 mt-10" alt="emotion" />
                                            <p class="kid text-2xl mt-3">Memori</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-2">
                        </div>
                        <div className="w-1/3 px-2">
                            <Link to="/word">
                                <div className="rounded card w-56 h-64">
                                    <div className="face front rounded text-center">
                                        <div className="text-center mt-8">
                                            <img src="https://image.flaticon.com/icons/svg/186/186002.svg" className="w-32 mt-10" alt="emotion" />
                                            <p class="kid text-2xl mt-3">Ejaan</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;