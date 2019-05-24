import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Back from '../utils/Back'

class Introduction extends Component {
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
                        <div className="w-1/3 px-1 py-1 flip">
                            <Link to="/happy">
                            <div className="rounded h-48 card flipped">
                                <div className="face front rounded text-center bg-teal-dark shadow">
                                    <div className="text-center mt-8">
                                        <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                                    </div>
                                </div>
                                <div className="face back rounded bg-teal shadow">
                                    <div className="text-center mt-3">
                                        <p><img src={"/images/gembira.svg"} className="w-32" alt="emotion" /></p>
                                        <p className="kid font-semibold text-2xl mt-2">Gembira</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-1 py-1 flip">
                            <Link to="/disapointed">
                            <div className="rounded h-48 card flipped">
                                <div className="face front rounded text-center bg-teal-dark shadow">
                                    <div className="text-center mt-8">
                                        <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                                    </div>
                                </div>
                                <div className="face back rounded bg-teal shadow">
                                    <div className="text-center mt-3">
                                        <p><img src={"/images/kecewa.svg"} className="w-32" alt="emotion" /></p>
                                        <p className="kid font-semibold text-2xl mt-2">Kecewa</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-1 py-1 flip">
                            <Link to="/angry">
                            <div className="rounded h-48 card flipped">
                                <div className="face front rounded text-center bg-teal-dark shadow">
                                    <div className="text-center mt-8">
                                        <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                                    </div>
                                </div>
                                <div className="face back rounded bg-teal shadow">
                                    <div className="text-center mt-3">
                                        <p><img src={"/images/marah.svg"} className="w-32" alt="emotion" /></p>
                                        <p className="kid font-semibold text-2xl mt-2">Marah</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-1/3 px-1 py-1 flip">
                            <Link to="/sad">
                            <div className="rounded h-48 card flipped">
                                <div className="face front rounded text-center bg-teal-dark shadow">
                                    <div className="text-center mt-8">
                                        <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                                    </div>
                                </div>
                                <div className="face back rounded bg-teal shadow">
                                    <div className="text-center mt-3">
                                        <p><img src={"/images/sedih.svg"} className="w-32" alt="emotion" /></p>
                                        <p className="kid font-semibold text-2xl mt-2">Sedih</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-1 py-1 flip">
                            <Link to="/scared">
                            <div className="rounded h-48 card flipped">
                                <div className="face front rounded text-center bg-teal-dark shadow">
                                    <div className="text-center mt-8">
                                        <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                                    </div>
                                </div>
                                <div className="face back rounded bg-teal shadow">
                                    <div className="text-center mt-3">
                                        <p><img src={"/images/takut.svg"} className="w-32" alt="emotion" /></p>
                                        <p className="kid font-semibold text-2xl mt-2">Takut</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-1/3 px-1 py-1 flip">
                            <Link to="/shocked">
                            <div className="rounded h-48 card flipped">
                                <div className="face front rounded text-center bg-teal-dark shadow">
                                    <div className="text-center mt-8">
                                        <img src={"/images/star.svg"} className="w-32" alt="emotion" />
                                    </div>
                                </div>
                                <div className="face back rounded bg-teal shadow">
                                    <div className="text-center mt-3">
                                        <p><img src={"/images/terkejut.svg"} className="w-32" alt="emotion" /></p>
                                        <p className="kid font-semibold text-2xl mt-2">Terkejut</p>
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

export default Introduction;