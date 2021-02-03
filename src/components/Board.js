import React from 'react'
import Square from './Square'
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: [0, 1, 2] }
    }
    renderSquare(i) {    return <Square value={i} />;    } 
    render() {
        const status = 'Next Player X:';
        return (<div>
                <div className='status'>{status}</div>
                {this.state.counter.map((answer, i) => {
                    return (<div className='board-row' key={i}>
                            {this.renderSquare(answer)}
                            {this.renderSquare(answer)}
                            {this.renderSquare(answer)}
                        </div>)
                })}
            </div>
        )
    }
}
export default Board;