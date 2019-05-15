import React, { Component } from 'react'
import Box from '../general/Box'

export default class Boxes extends Component {
  render() {
    const { houses } = this.props
    const isTriple = false
    return (
      <div>
        {isTriple?
          houses.map((item, index) => (
            (index && !(index % 3))? (
              <div className="d-flex">
                {Array.from(Array(3)).map((t, i) =>
                  <Box key={index - 3 + i} index={index - 3 + i} house={houses[index - 3 + i]} isMini={true}  />
                )}
              </div>
            ): <div />
          ))
          :
          houses.map((item, index) =>
          <Box key={index} index={index} house={item}  />
        )}
      </div>
    )
  }
}
