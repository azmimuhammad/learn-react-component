import React from 'react'
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import CounterComponent from './CounterComponent'
import { connect } from 'react-redux'

class CounterPage extends React.Component {
  state = {
    list: [],
  }
  handleListChange = (newVal) => {
    this.setState({
      list: newVal,
    })
  }
  render() {
    return (
      <Container>
        <h1>Counter Page</h1>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CounterComponent />
          </Grid>
          <Grid item xs={5}>
            <List component="nav" aria-label="main mailbox folders">
              {this.props.list &&
                this.props.list.map((val, key) => (
                  <ListItem button key={key}>
                    <ListItemText primary={`List ke-${val.id}`} />
                  </ListItem>
                ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.listCounter,
  }
}

export default connect(mapStateToProps)(CounterPage)
