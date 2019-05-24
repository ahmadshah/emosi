import React, { Component } from 'react'
import _ from 'lodash'
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import { DragDropContext } from 'react-dnd'
import { Link } from 'react-router-dom'
import Back from '../utils/Back'
import Bin from './Bin'
import Selector from './Selector'

const emotions = ['GEMBIRA', 'SEDIH', 'MARAH', 'TAKUT', 'TERKEJUT', 'KECEWA']

class WordGame extends Component {
    constructor(props) {
        super(props)
        this.match = this.match.bind(this)
        this.state = {
            emotion: '',
            words: [],
            selectors: [],
            matchedWord: [],
            matchedSelector: []
        }
    }

    match(word, selector) {
        this.state.matchedWord.push(word)
        let selectors = _.pullAt(this.state.selectors, selector)

        this.setState({
            selectors: this.state.selectors
        })

        let sound = new Audio('/kids-cheering-sound-effect.mp3');
        sound.play();
    }

    generatePreview(itemType, item, style) {
        return (
            <div className="w-1/6 px-1 py-1 flip" style={style}>
                <div className="rounded h-48 card">
                    <div className="face rounded bg-teal-dark shadow">
                        <div className="text-center mt-3">
                            <p className="kid text-6xl text-teal-lightest mt-10">{item.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    refreshPage() {
        window.location.reload();
    }

    componentWillMount() {
        let randomEmotion = _.sample(emotions)
        let splitEmotion = _.split(randomEmotion, '')
        let shuffledEmotion = [...splitEmotion].sort(() => Math.random() - 0.5)
        
        this.setState({
            emotion: _.toLower(randomEmotion),
            words: splitEmotion,
            selectors: shuffledEmotion
        })
    }

    render() {
        return (
            <div className="container mx-auto mt-5">
                <div className="flex">
                    <Back link="/games" />
                    <div className="w-1/3 px-2">
                        <div className="rounded card w-56 h-64">
                            <div className="face front rounded text-center">
                                <div className="text-center mt-8">
                                    <img src={"/images/" + this.state.emotion + ".svg"} className="w-32 mt-10" alt="emotion" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <Link to="/word" onClick={this.refreshPage}>
                            <div className="rounded card w-56 h-64">
                                <div className="face front rounded text-center">
                                    <div className="text-center mt-8">
                                        <img src="https://image.flaticon.com/icons/svg/1250/1250302.svg" className="w-24 mt-10" alt="emotion" />
                                        <p className="kid text-xl mt-3">Mula Semula</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex mb-10">
                    {
                        this.state.words.map((word, index) => {
                            if(_.indexOf(this.state.matchedWord, index) !== -1) {
                                return <Bin index={index} key={index} word={word} match={this.match} selected={true} />
                            } else {
                                return <Bin index={index} key={index} word={word} match={this.match} selected={false} />
                            }
                        }) 
                    }
                </div>

                <div className="flex">
                    {
                        this.state.selectors.map((selector, index) =>
                            <Selector id={selector} index={index} key={index} selector={selector} />
                        )
                    }
                </div>
                <Preview generator={this.generatePreview} />
            </div>
        )
    }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(WordGame)