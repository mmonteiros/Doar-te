import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import firebase from "../../../firebase/firebase";

// core components
import Header from "components/Header/Header.js";
import HeaderLinksUser from "components/Header/HeaderLinksUser";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import CardHeader from "components/Card/CardHeader.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import camiseta from "assets/img/examples/camiseta.jpg";
import image from "assets/img/bg7.jpg";

import useStyles from "assets/jss/material-kit-react/views/doarPage";

export default function Camisa(props) {

  const classes = useStyles();

  const { ...rest } = props;

  const [register, setRegister] = React.useState([]);

  useEffect(() => {
    firebase.db.collection("camisas").orderBy('name').get().then(querySnapshot => 
          querySnapshot.docs.map(doc => {
            let data = doc.data()
            return {
              name: data.name,
              email: data.email,
            }
          })
         )
        .then(users => setRegister(users));
  });

  if(!firebase.getCurrentUsername()) {
		// not logged in
		props.history.replace('/')
		return null
  }

  async function goDoarPage() {
    try {
        props.history.push('/receber')
    } catch(error) {
        alert(error.message)
    }
    }

  return (
    <div>
      <Header
        absolute
        color=""
        brand="Doar te"
        rightLinks={<HeaderLinksUser />}
        {...rest}
      />
      <div 
       style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
        }} 
      className={classes.root, classes.main, classes.mainRaised}>
      <Grid container spacing={3}>
          <Grid item color="transparent"  xs={12}>
            <Card color="primary">
            <ArrowBackIcon  onClick={goDoarPage} />
              <CardHeader color="white" >
              <br/>
              <h3 align="center">Você poderá contactar as instituições pelo e-mail</h3>
              </CardHeader>
            </Card>
          </Grid>


          <Grid item xs={6} sm={3}>
            <Tooltip 
            id="Camisa-tooltip"
            title="Instituições que disponbilizam camisas"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
              <Card
              className={classes.card, classes.main, classes.mainRaised}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={camiseta}
                    title="Camisa"
                  />
                </CardActionArea>
              </Card>
              </Tooltip>
          </Grid>
          
              <div className={classes.paperModal}>
                <h2 id="simple-modal-title" align="center" > Camisetas </h2>
                <List id="simple-modal-description" className={classes.rootList}> 
                    {register.map (item => (
                      <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"Nome: " + item.name} secondary={"E-mail: " +item.email} />
                      </ListItem>
                    ))}     
                </List>
              </div>
        </Grid>
      </div>
    </div>
  );

}