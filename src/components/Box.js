import React from 'react'

export default class Box extends React.Component {
    render() {
        return (
            <div className="box" style={{
                backgroundColor: `${this.props.color}`
            }}>
                <button onClick={() => {this.props.handleClick()}}>Change Color</button>
            </div>
        )
    }
}
