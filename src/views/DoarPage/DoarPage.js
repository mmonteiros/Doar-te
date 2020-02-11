import React from 'react';
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
import blood from "assets/img/examples/blood.png";
import books from "assets/img/examples/books.png";
import food from "assets/img/examples/food.png";
import hygiene from "assets/img/examples/Hygiene.jpg";
import medula from "assets/img/examples/medula.jpg";
import toys from "assets/img/examples/toys.jpg";

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

  async function goShirt() {
		try {
			props.history.push('/doarShirt')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goPants() {
		try {
			props.history.push('/doarPants')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goBlood() {
		try {
			props.history.push('/doarBlood')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goFood() {
		try {
			props.history.push('/doarFood')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goBooks() {
		try {
			props.history.push('/doarBooks')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goHygiene() {
		try {
			props.history.push('/doarHygiene')
		} catch(error) {
			alert(error.message)
		}
  }

  async function goMedula() {
		try {
			props.history.push('/doarMedula')
		} catch(error) {
			alert(error.message)
		}
  }
  
  async function goToys() {
		try {
			props.history.push('/doarToys')
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
              <h3 align="center">Doe algum desses itens, obrigado!!!</h3>
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
              onClick={goShirt}
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
            id="Toys-tooltip"
            title="Instituições que disponbilizam brinquedos"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goToys}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={toys}
                  title="Toys"
                />
              </CardActionArea>
            </Card>
          </Tooltip>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Tooltip 
            id="Blood-tooltip"
            title="Instituições que disponbilizam sangue para transfusão"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goBlood}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={blood}
                  title="Blood"
                />
              </CardActionArea>
            </Card>
          </Tooltip>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Tooltip 
            id="Books-tooltip"
            title="Instituições que disponbilizam livros"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goBooks}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={books}
                  title="Books"
                />
              </CardActionArea>
            </Card>
          </Tooltip>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Tooltip 
            id="Food-tooltip"
            title="Instituições que disponbilizam kit de comidas"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goFood}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={food}
                  title="Comida"
                />
              </CardActionArea>
            </Card>
          </Tooltip>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Tooltip 
            id="Hygiene-tooltip"
            title="Instituições que disponbilizam kit de higiene"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goHygiene}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={hygiene}
                  title="Higiene"
                />
              </CardActionArea>
            </Card>
          </Tooltip>
          </Grid>

          <Grid item xs={6} sm={3}>
          <Tooltip 
            id="Medula-tooltip"
            title="Instituições que disponbilizam medula óssea com procedimento de recuperação"
            placement={window.innerWidth > 959 ? "bottom" : "right"}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={Zoom}>
            <Card 
            onClick={goMedula}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={medula}
                  title="Medula"
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


        </Grid>
      </div>
    </div>
  );

}