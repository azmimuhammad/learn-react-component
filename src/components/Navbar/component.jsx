import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Component = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            src="https://www.ajarinkoding.id/static/0f056e27f0442014e4d585a86cd4b584/352e5/profile-pic.png"
            alt=""
            width={40}
            height={40}
            className="mr-1"
          />
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => props.history.push('/')}
          >
            Ajarin Koding
          </Typography>
          <Button color="inherit" onClick={() => props.history.push('/')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => props.history.push('/about')}>
            Todo Apps
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Component)
