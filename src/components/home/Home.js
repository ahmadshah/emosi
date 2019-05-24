import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container mx-auto mt-32">
                <div className="px-2">
                    <div className="flex flex-wrap justify-center mb-10">
                        <p class="kid text-5xl">EMOSI</p>
                </div>
                    <div className="flex -mx-2">
                        <div className="w-1/3 px-2">
                            <Link to="/induction">
                            <div className="rounded card w-56 h-64">
                                <div className="face front rounded text-center">
                                    <div className="text-center mt-8">
                                            <img src="https://image.flaticon.com/icons/svg/186/186008.svg" className="w-32 mt-10" alt="emotion" />
                                        <p class="kid text-2xl mt-3">Set Induksi</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-2">
                            <Link to="/introduction">
                            <div className="rounded card w-56 h-64">
                                <div className="face front rounded text-center">
                                    <div className="text-center mt-8">
                                        <img src="https://image.flaticon.com/icons/svg/185/185999.svg" className="w-32 mt-10" alt="emotion" />
                                        <p class="kid text-2xl mt-3">Pengenalan</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-2">
                            <Link to="/games">
                            <div className="rounded card w-56 h-64">
                                <div className="face front rounded text-center">
                                    <div className="text-center mt-8">
                                        <img src="https://image.flaticon.com/icons/svg/185/185997.svg" className="w-32 mt-10" alt="emotion" />
                                        <p class="kid text-2xl mt-3">Kuiz</p>
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

export default Home;