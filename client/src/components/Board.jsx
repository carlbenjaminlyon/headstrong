import React from 'react'
import { BigWhiteboard } from 'react-component-whiteboard'

class Board extends React.Component {
  render() {
    return (
      <div>
        <div>
        <h1>Draw Something</h1>
        </div>
        <BigWhiteboard />
      </div>
    )
  }
}

export default Board;