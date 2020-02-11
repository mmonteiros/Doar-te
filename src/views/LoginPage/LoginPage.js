import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel } from '@material-ui/core'

// core components
import Header from "components/Header/Header.js";
import HeaderLinksLogin from "components/Header/HeaderLinksLogin";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

import firebase from "../../firebase/firebase";

const useStyles = makeStyles(styles);

function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  const { ...rest } = props;
  
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  
  async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
  }
   
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Doar te"
        rightLinks={<HeaderLinksLogin />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={e => e.preventDefault() && false} >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <br/>
                    <h3>Login</h3>
                    <br/>
                  </CardHeader>
                  <p className={classes.divider}>Vamos Doar \o/</p>
                  
                  <CardBody>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
						        <Input id="email" name="email" autoComplete="on" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
						        <Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
                  </FormControl>

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={login}
                    simple color="primary" 
                    size="lg">
                      Login
                    </Button>
                  </CardFooter>
                 
                  <CardFooter className={classes.cardFooter}>
                    <Button 
                    simple color="primary" 
                    fullWidth
                    component={Link}
						        to="/register"
                    size="lg">
                      Register
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

export default withRouter((LoginPage))