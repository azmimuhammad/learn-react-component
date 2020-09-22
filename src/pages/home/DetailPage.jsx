import React from 'react'
import { Container } from '@material-ui/core'

class DetailPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>DetailPage</h1>
        <hr />
        <p>id: {this.props.match.params.id}</p>
      </Container>
    )
  }
}

export default DetailPage
