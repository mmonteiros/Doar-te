import React, { useEffect, useState } from "react";
import cx from 'clsx';
import { Link, withRouter } from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinksUser from "components/Header/HeaderLinksUser";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';

import styles from "assets/jss/material-kit-react/views/dashboardPage.js";
import CardStyles from "assets/jss/material-kit-react/components/blogCardStyle";

import image from "assets/img/bg7.jpg";

import firebase from "../../firebase/firebase";

const useStyles = makeStyles(styles);

function DoarPage(props) {
  const classes = useStyles();

  const classesCard = CardStyles();

  const { ...rest } = props;

  const [quote, setQuote] = useState('');

  const {
    button: buttonStyles,
    ...cardContentStyles
  } = useBlogCardContentStyles();

  const shadowStyles = useOverShadowStyles();

  useEffect(() =>{
		if(firebase.getCurrentUsername()) {
		  firebase.getCurrentUserQuote().then(setQuote)
		}
  }, [firebase.getCurrentUsername(), firebase.getCurrentUserQuote()])
		 
  if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
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
    
        <Footer />
      </div>
  );
};

export default withRouter((withStyles(styles)(DoarPage)))