import React, { useState, useEffect } from 'react'
import './styles.css'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'

import { createBrowserHistory } from "history";

// pages for this product
import Home from "../views/Components/Home";
import LoginPage from "../views/LoginPage/LoginPage.js";
import Dashboard from "../views/Dashboard/DashboardPage";
import Register from "../views/Register/RegisterPage";
import DoarPage from "../views/DoarPage/DoarPage";
import DoarShirtPage from "../views/DoarPage/Sections/Shirt";
import DoarPantsPage from "../views/DoarPage/Sections/Pants";
import DoarBloodPage from "../views/DoarPage/Sections/Blood";
import DoarBooksPage from "../views/DoarPage/Sections/Books";
import DoarFoodPage from "../views/DoarPage/Sections/Food";
import DoarHygienePage from "../views/DoarPage/Sections/Hygiene";
import DoarMedulaPage from "../views/DoarPage/Sections/Medula";
import DoarToysPage from "../views/DoarPage/Sections/Toys";
import ReceberPage from "../views/ReceberPage/ReceberPage";
import ReceberShirtPage from "../views/ReceberPage/Sections/Shirt";
import ReceberPantsPage from "../views/ReceberPage/Sections/Pants";
import ReceberBloodPage from "../views/ReceberPage/Sections/Blood";
import ReceberMedulaPage from "../views/ReceberPage/Sections/Medula";
import ReceberToysPage from "../views/ReceberPage/Sections/Toys";
import ReceberBooksPage from "../views/ReceberPage/Sections/Books";
import ReceberFoodPage from "../views/ReceberPage/Sections/Food";
import ReceberHygienePage from "../views/ReceberPage/Sections/Hygiene";

const theme = createMuiTheme();


export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

    var hist = createBrowserHistory();

	return firebaseInitialized !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router history={hist}>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/register" component={Register} />
					<Route path="/doar" component={DoarPage} />
					<Route path="/doarShirt" component={DoarShirtPage} />
					<Route path="/doarPants" component={DoarPantsPage} />
					<Route path="/doarBlood" component={DoarBloodPage} />
					<Route path="/doarBooks" component={DoarBooksPage} />
					<Route path="/doarFood" component={DoarFoodPage} />
					<Route path="/doarHygiene" component={DoarHygienePage} />
					<Route path="/doarMedula" component={DoarMedulaPage} />
					<Route path="/doarToys" component={DoarToysPage} />
					<Route path="/receber" component={ReceberPage} />
					<Route path="/receberShirt" component={ReceberShirtPage} />
					<Route path="/receberPants" component={ReceberPantsPage} />
					<Route path="/receberBlood" component={ReceberBloodPage} />
					<Route path="/receberMedula" component={ReceberMedulaPage} />
					<Route path="/receberToys" component={ReceberToysPage} />
					<Route path="/receberBooks" component={ReceberBooksPage} />
					<Route path="/receberFood" component={ReceberFoodPage} />
					<Route path="/receberHygiene" component={ReceberHygienePage} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}