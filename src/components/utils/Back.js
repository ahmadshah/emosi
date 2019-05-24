import React, { Component } from 'react'
import  { Link } from 'react-router-dom'

class Back extends Component {
    render() {
        return (
            <div className="w-1/3 px-2">
                <Link to={this.props.link}>
                    <div className="rounded card w-56 h-64">
                        <div className="face front rounded text-center">
                            <div className="text-center mt-8">
                                <img src="https://image.flaticon.com/icons/svg/1250/1250160.svg" className="w-24 mt-10" alt="emotion" />
                                <p className="kid text-xl mt-3">Kembali</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Back