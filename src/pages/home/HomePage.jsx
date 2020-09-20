import React from 'react'
import Card from '../../components/Card'
import { Container, Grid } from '@material-ui/core'
import axios from 'axios'

class HomePage extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list: [
  //       {
  //         image: '',
  //         title: 'ReactJS Introduction',
  //         description: 'Introduction basic reacjt',
  //       },
  //       {
  //         image: '',
  //         title: 'Create New Project with Reactjs',
  //         description: 'Init new project using CLI method',
  //       },
  //       {
  //         image: '',
  //         title: 'Funcion Components',
  //         description: 'Create static & dynamic functional component',
  //       },
  //       {
  //         image: '',
  //         title: 'Class Components',
  //         description:
  //           'Create static & dynamic class component, Create static & dynamic class component',
  //       },
  //     ],
  //   }
  // }
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

  handleClickCard(id) {
    console.log('id', id)
  }

  render() {
    return (
      <>
        <Container>
          <h1>Home Page</h1>
          <Grid container spacing={3}>
            {this.state.list &&
              this.state.list.map((val, key) => (
                <Card
                  key={key}
                  data={val}
                  onClick={this.handleClickCard.bind(this, val.id)}
                />
              ))}
          </Grid>
        </Container>
      </>
    )
  }
}

export default HomePage
