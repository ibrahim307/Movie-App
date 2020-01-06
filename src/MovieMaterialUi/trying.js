import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/CardMedia'


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 50,
      paddingTop: '56.25%', 
    },}))
const CardList = () => {
    const classes = useStyles();
    return(
        <div>
        <Card className={classes.card}>
      <CardHeader
        
        
        title="Jocker"
        subheader="September , 2019"
      />
      <CardMedia
        className={classes.media}
        image="http://fr.web.img3.acsta.net/medias/nmedia/18/35/23/40/18431141.jpg"
        title="Jocker"
      />
  
    </Card>
        </div>
    )
}
export default CardList;