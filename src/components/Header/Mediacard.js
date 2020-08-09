import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import corona from './corona2.jpeg';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
//   handleClick = () => {
//     this.props.history.push("/source");
//   }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Covid"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href = {props.link}>
        Learn More
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// // import corona from './corona2.jpeg';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard(props) {
//   const classes = useStyles();
// //   handleClick = () => {
// //     this.props.history.push("/source");
// //   }
//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.flight.links.mission_patch}
//           title="Covid"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.flight.details}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//           {props.flight.mission_name} #{props.flight.flight_number}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" href = "www.google.com">
//         Learn More
//         </Button>
//         {/* <Button size="small" color="primary">
//           Learn More
//         </Button> */}
//       </CardActions>
//     </Card>
//   );
// }