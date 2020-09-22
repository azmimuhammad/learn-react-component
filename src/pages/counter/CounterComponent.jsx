import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { connect } from 'react-redux'

class CounterComponent extends React.Component {
  render() {
    return (
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={this.props.handleMinus}>-</Button>
        <Button disabled>{this.props.list.length}</Button>
        <Button onClick={this.props.handlePlus}>+</Button>
      </ButtonGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.listCounter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: 'ADD_LIST' }),
    handleMinus: () => dispatch({ type: 'MINUS_LIST' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
