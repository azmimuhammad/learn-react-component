import React from 'react'
import CardComponent from '../../components/Card'
import { Container, Grid } from '@material-ui/core'
import axios from 'axios'

class HomePage extends React.Component {
  state = {
    list: [],
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      this.setState({
        list: res.data,
      })
    })
  }

  render() {
    return (
      <>
        <Container>
          <h1>Home Page</h1>
          <Grid container spacing={3}>
            {this.state.list &&
              this.state.list.map((val, key) => (
                <CardComponent key={key} data={val} url="/detail/" />
              ))}
          </Grid>
        </Container>
      </>
    )
  }
}

export default HomePage
