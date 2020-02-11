/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { withRouter } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import firebase from "../../firebase/firebase";


const useStyles = makeStyles(styles);

function HeaderLinksUser(props) {

  const classes = useStyles();

  async function logout() {
	await firebase.logout()
	props.history.push('/')
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            onClick={logout}   
            className={classes.navLink}
          >
            <AccountCircleOutlinedIcon className={classes.icons} /> Logout
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-github"
          title="Veja nosso Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/YodaDevs/Doar-te"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withRouter((HeaderLinksUser))
