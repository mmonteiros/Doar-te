import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import firebase from "../../firebase/firebase";

// core components
import Header from "components/Header/Header.js";
import HeaderLinksUser from "components/Header/HeaderLinksUser";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import CardHeader from "components/Card/CardHeader.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import camiseta from "assets/img/examples/camiseta.jpg";
import calca from "assets/img/examples/calca.jpg";

import image from "assets/img/bg7.jpg";

import useStyles from "assets/jss/material-kit-react/views/doarPage";

export default function DoarPage(props) {

  const classes = useStyles();

  const { ...rest } = props;

  if(!firebase.getCurrentUsername()) {
		// not logged in
		props.history.replace('/')
		return null
  }

  async function goCamisa() {
		try {
			props.history.push('/doarCamisa')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goPants() {
		try {
			props.history.push('/doarCalca')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goDashPage() {
    try {
        props.history.push('/dashboard')
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
            <ArrowBackIcon  onClick={goDashPage} />
              <CardHeader color="white" >
              <br/>
              <h3 align="center">O que você quer doar?</h3>
              </CardHeader>
            </Card>
          </Grid>


          <Grid
           item xs={6} sm={3}>
            <Tooltip 
            id="Camisa-tooltip"
            title="Instituições que disponbilizam camisas"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
              <Card
              onClick={goCamisa}
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
          

          <Grid item xs={6} sm={3}>
          <Tooltip 
            id="Camisa-tooltip"
            title="Instituições que disponbilizam calças"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goPants}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={calca}
                  title="Calça"
                />
              </CardActionArea>
            </Card>
          </Tooltip>
          </Grid>


          <Grid item xs={6} sm={3}>
            <Card 
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={camiseta}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>

          

          <Grid item xs={6} sm={3}>
            <Card 
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={camiseta}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );

}