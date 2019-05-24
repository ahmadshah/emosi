import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

const Types = {
    ITEM: 'selector'
}

const source = {
    beginDrag(props) {
        return {
            id: props.id,
            key: props.index
        }
    },
    endDrag(props, monitor) {
        //
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Selector extends Component {
    render() {
        const { connectDragSource, selector } = this.props
        return connectDragSource(
            <div className="w-1/6 px-1 py-1 flip">
                <div className="rounded h-48 card">
                    <div className="face rounded bg-teal-dark shadow">
                        <div className="text-center mt-3">
                            <p className="kid text-6xl text-teal-lightest mt-10">{ selector }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DragSource(Types.ITEM, source, collect)(Selector)