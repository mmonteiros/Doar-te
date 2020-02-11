import React from "react";
import cx from 'clsx';
import { withRouter } from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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
import blogCardStyles from "assets/jss/material-kit-react/components/blogCardStyle";

import image from "assets/img/bg7.jpg";

import firebase from "../../firebase/firebase";
import ProfileCard from "../../components/Card/ProfileCard";

const useStyles = makeStyles(styles);

function Dashboard(props) {
  const classes = useStyles();

  const classesCard = blogCardStyles();

  const { ...rest } = props;

  const {
    button: buttonStyles,
    ...cardContentStyles
  } = useBlogCardContentStyles();

  const shadowStyles = useOverShadowStyles();
		 
  if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
  }

  async function goDoarPage() {
	props.history.push('/doar')
  }

  async function goReceberPage() {
	props.history.push('/receber')
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
	 className={classNames(classes.main, classes.mainRaised)}>
		 <br/><br/>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={4}>
				<ProfileCard/>
			</GridItem>
		</GridContainer>
		<br/><br/>
          <GridContainer justify="center">
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
							Vamos, aqui você encontrará itens para doar nas instituições cadastradas \o/
							<br/><br/>
							
						</Typography>
					}
					/>
					<Button 
					onClick={goDoarPage}   
					className={buttonStyles}
					>Doar</Button>
				</CardContent>
			</Card>
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
							Venha e encontre itens para receber das nossas instituições cadastradas (^^,)
							<br/><br/>
						</Typography>
					}
					/>
					<Button 
					onClick={goReceberPage}   
					className={buttonStyles}
					>Receber</Button>
				</CardContent>
			</Card>
          </GridContainer>
		<br/>
		<br/>
        </div>
        <Footer />
      </div>
  );
};

export default withRouter((withStyles(styles)(Dashboard)))