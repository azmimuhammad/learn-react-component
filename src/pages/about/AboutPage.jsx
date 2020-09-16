import React from 'react'
import {
  List,
  ListItem,
  Container,
  TextField,
  Button,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [],
      name: '',
      isFinish: false,
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    const data = window.localStorage.getItem('list')
      ? JSON.parse(window.localStorage.getItem('list'))
      : []
    this.setState({ listData: data })
  }
  handleForm = (e) => {
    this.setState({ name: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let formData = {
      name: this.state.name,
      isFinish: this.state.isFinish,
    }
    this.state.listData.push(formData)
    window.localStorage.setItem('list', JSON.stringify(this.state.listData))
    this.getData()
  }
  setFinish(val) {
    let list = this.state.listData
    let index = list.findIndex((element) => element.name === val)
    let newData = [...list]
    newData[index] = { ...newData[index], isFinish: true }

    // this.setState({ listData: newData })
    window.localStorage.setItem('list', JSON.stringify(newData))
    this.getData()
    console.log('newData', newData)
    console.log('listData', this.state.listData)
  }
  render() {
    return (
      <Container>
        <h1>Todo Apps</h1>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <form onSubmit={this.handleSubmit}>
              <List>
                <ListItem>
                  <TextField label="Activity" onChange={this.handleForm} />
                </ListItem>
                <ListItem>
                  <Button
                    size="small"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </ListItem>
              </List>
            </form>
          </Grid>
          <Grid item xs={6}>
            <h2>Todo List</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nama</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.listData &&
                  this.state.listData.map((val, key) => (
                    <TableRow key={key}>
                      <TableCell>{val.name}</TableCell>
                      <TableCell>
                        {val.isFinish ? (
                          <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            disabled
                          >
                            Finish
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<AssignmentTurnedInIcon />}
                            onClick={this.setFinish.bind(this, val.name)}
                          >
                            Done
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default AboutPage
