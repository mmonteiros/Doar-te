import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel } from '@material-ui/core'
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

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
			props.history.replace('/dashboard-page')
		} catch(error) {
			alert(error.message)
		}
	}

  
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
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
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  
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
						        to="/register-page"
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