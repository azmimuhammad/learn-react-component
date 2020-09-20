import React from 'react'
import Grid from '@material-ui/core/Grid'
import './styles.css'

class CardComponent extends React.Component {
  render() {
    const description = (val) => {
      let result = ''
      if (val) {
        if (val.length > 60) {
          result = `${val.slice(0, 60)} ...`
        } else {
          result = val
        }
      } else {
        result = 'There is no description'
      }
      return result
    }
    const title = (val) => {
      let result = ''
      if (val) {
        if (val.length > 60) {
          result = `${val.slice(0, 60)} ...`
        } else {
          result = val
        }
      } else {
        result = 'There is no title'
      }
      return result
    }

    return (
      <>
        <Grid item xs={3}>
          <div className="card">
            <img
              src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2020/04/09/663219154.png"
              className="card-thumbnail"
              alt=""
            />
            <div className="card-title">{title(this.props.data.title)}</div>
            <div className="card-description mt-1">
              {description(this.props.data.description)}
            </div>
          </div>
        </Grid>
      </>
    )
  }
}

export default CardComponent
