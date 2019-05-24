import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Back from '../utils/Back'
import Card from './Card';

class MemoryGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotions: ['gembira', 'sedih', 'marah', 'takut', 'terkejut', 'kecewa'],
            cards: [],
            open: []
        };
    }

    handleClick(name, index) {
        if(this.state.open.length === 2) {
            setTimeout(() => {
                this.check()
            }, 750)
        } else {
            let cards = this.state.cards;
            let open = this.state.open;
            cards[index].close = false;
            open.push({
                name,
                index
            });

            this.setState({
                cards: cards,
                open: open
            });

            if (this.state.open.length === 2) {
                setTimeout(() => {
                    this.check()
                }, 750)
            }
        }
    }

    check() {
        let cards = this.state.cards;

        if(this.state.open[0].name === this.state.open[1].name && this.state.open[0].index !== this.state.open[1].index) {
            cards[this.state.open[0].index].matched = true;
            cards[this.state.open[1].index].matched = true;

            let sound = new Audio('/kids-cheering-sound-effect.mp3');
            sound.play();
        } else {
            cards[this.state.open[0].index].close = true;
            cards[this.state.open[1].index].close = true;

            let sound = new Audio('/fail-buzzer-04.mp3');
            sound.play();
        }

        this.setState({
            cards: cards,
            open: []
        });
    }

    refreshPage() {
        window.location.reload();
    }

    componentWillMount() {
        let dedup = this.state.emotions.concat(this.state.emotions);

        dedup.sort(() => Math.random() - 0.5);
        dedup.map((name, index) => {
            this.state.cards.push({
                emotion: name,
                close: true,
                matched: false
            });
        });
    }

    render() {
        return(
            <div className="container mx-auto">
                <div className="flex">
                    <Back link="/games" />
                    <div class="w-1/3 px-2"></div>
                    <div className="w-1/3 px-2">
                        <Link to="/memory" onClick={this.refreshPage}>
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
                    <div className="flex flex-wrap justify-center">
                        {
                            this.state.cards.map((card, index) =>
                                <Card key={index} emotion={card.emotion} close={card.close} matched={card.matched} click={() => { this.handleClick(card.emotion, index) }} />
                            )
                        }
                    </div>
            </div>
        );
    }
}

export default MemoryGame;