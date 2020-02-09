import React, { useState } from 'react'
import { InputLabel, MenuItem, FormHelperText,  FormControl, Select, Input } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase/firebase'
import { makeStyles } from "@material-ui/core/styles";

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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

function Register(props) {

	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

	setTimeout(function() {
		setCardAnimation("");
	  }, 700);
	

	const classes = useStyles();

	const { ...rest } = props;

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [type, setType] = useState('')
	const [cpf, setCpf] = useState('')

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);

	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = event => {
		setType(event.target.value);
	};

	return (
		<div>
      <Header
        absolute
        color="transparent"
        brand="Doar te"
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
                    <br/>
					<h3>Register</h3>
					<br/>
                  </CardHeader>
                  <p className={classes.divider}>Be Classical</p>   
                  <CardBody>
				  	<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="name">Name</InputLabel>
						<Input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}  />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}  />
					</FormControl>
					<br/><br/>
					<FormControl required variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
							Type
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={type}
							onChange={handleChange, e => setType(e.target.value) }
							labelWidth={labelWidth}
						>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"Instituição"}>Instituição</MenuItem>
						<MenuItem value={"Pessoa"}>Pessoa</MenuItem>
						</Select>
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="cpf">CPF/CNPJ</InputLabel>
						<Input name="cpf" type="cpf" id="cpf" autoComplete="off" value={cpf} onChange={e => setCpf(e.target.value)}  />
					</FormControl>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
				  	<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={onRegister}
						simple
						className={classes.submit}>
						Register
          			</Button>
                  </CardFooter>
                 
                  <CardFooter className={classes.cardFooter}>
				  <Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/login"
						
						className={classes.submit}>
						Go back to Login
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
	)

	async function onRegister() {
		try {
			await firebase.register(name, email, password, cpf)
			await firebase.addType(type)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(withStyles(styles)(Register))