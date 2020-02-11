/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function HeaderLinksLogin(props) {
  const classes = useStyles();

  
  async function goHome() {
    props.history.push('/');
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-home"
          title="Início"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            onClick={ goHome }
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-home"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-github"
<<<<<<< HEAD
          title="Veja nosso Github"
=======
          title="Visite nosso Github"
>>>>>>> 1030d923ee42d92f06de45483c6c2e9c10e50ff7
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

export default withRouter((HeaderLinksLogin))
