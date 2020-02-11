import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
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
                      <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i
                        className={
                          classes.socialIcons + " fab fa-google-plus-g"
                        }
                      />
                    </Button>
                  </div>
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
