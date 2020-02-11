import React from "react";
import cx from 'clsx';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import blogCardStyles from "assets/jss/material-kit-react/components/blogCardStyle";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  
  const { ...rest } = props;

  const classesCard = blogCardStyles();

  const {
    button: buttonStyles,
    ...cardContentStyles
  } = useBlogCardContentStyles();

  const shadowStyles = useOverShadowStyles();

  return (
    <div>
      <Header
        brand="Doar te"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Bem-vindo</h1>
                <h3 className={classes.subtitle}>
                  <i>Pois é dando que se recebe</i> - São Francisco
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <GridContainer justify="center">
      <Grid item xs={6} sm={3}>
          <Card className={cx(classesCard.root, shadowStyles.root)}>
          <CardMedia
            className={classesCard.media}
            image={
            'https://s3.amazonaws.com/lilianpacce/wp-content/uploads/2017/11/271117-dia-de-doar1.jpg'
            }
          />
          <CardContent>
            <TextInfoCardContent
            classes={cardContentStyles}
            overline={''}
            heading={''}
            body={
              <Typography component="h1" variant="h5">
                Vamos, aqui você encontrará 
                <br/><br/>
                
              </Typography>
            }
            />
            
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card className={cx(classesCard.root, shadowStyles.root)}>
          <CardMedia
            className={classesCard.media}
            image={
            'https://lilianmendanha.com.br/wp-content/uploads/2017/04/receber.jpg'
            }
          />
          <CardContent>
            <TextInfoCardContent
            classes={cardContentStyles}
            overline={''}
            heading={''}
            body={
              <Typography component="h1" variant="h5">
                Venha e encontre itens
                <br/><br/>
              </Typography>
            }
            />
            
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card className={cx(classesCard.root, shadowStyles.root)}>
          <CardMedia
            className={classesCard.media}
            image={
            'https://lilianmendanha.com.br/wp-content/uploads/2017/04/receber.jpg'
            }
          />
          <CardContent>
            <TextInfoCardContent
            classes={cardContentStyles}
            overline={''}
            heading={''}
            body={
              <Typography component="h1" variant="h5">
                Venha e encontre itens
                <br/><br/>
              </Typography>
            }
            />
          </CardContent>
        </Card>
        </Grid>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
