import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'
import _ from 'lodash'

const Types = {
    ITEM: 'selector'
}

const canMove = (props, selector) => {
    if (!props.selected) {
        return props.word === selector
    }
    
    return false
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

const target = {
    canDrop(props, monitor) {
        return canMove(props, monitor.getItem().id)
    },
    drop(props, monitor) {
        const item = monitor.getItem()
        props.match(props.index, item.key)
        return { key: props.index }
    }
}

class Bin extends Component {
    render() {
        let { word, selected, connectDropTarget, isOver, canDrop} = this.props;

        word = _.toLower(word)

        if(selected) {
            return (
                <div className="w-1/6 px-1 py-1 flip">
                    <div className="rounded h-48 card">
                        <div className="face rounded bg-teal-dark shadow">
                            <div className="text-center mt-3">
                                <p className="kid text-6xl text-teal-lightest mt-10">{word}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return connectDropTarget(
                <div className="w-1/6 px-1 py-1 flip">
                    <div className="rounded h-48 card">
                        {
                            !isOver &&
                            canDrop &&
                            !selected &&
                            <div className="face rounded bg-teal-lighter">
                                <div className="text-center mt-3">
                                    <p className="kid text-6xl text-teal-lightest mt-10">{word}</p>
                                </div>
                            </div>
                        }

                        {
                            !isOver &&
                            !canDrop &&
                            !selected &&
                            <div className="face rounded bg-teal-lighter">
                                <div className="text-center mt-3">
                                    <p className="kid text-6xl text-teal-lightest mt-10">{word}</p>
                                </div>
                            </div>
                        }

                        {
                            isOver &&
                            !canDrop &&
                            !selected &&
                            <div className="face rounded bg-teal-lighter">
                                <div className="text-center mt-3">
                                    <p className="kid text-6xl text-teal-lightest mt-10">{word}</p>
                                </div>
                            </div>
                        }

                        {
                            isOver &&
                            canDrop &&
                            !selected &&
                            <div className="face rounded bg-teal-dark shadow">
                                <div className="text-center mt-3">
                                    <p className="kid text-6xl text-teal-lightest mt-10">{word}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            )
        }
    }
}

export default DropTarget(Types.ITEM, target, collect)(Bin);