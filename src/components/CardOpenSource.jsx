import React from 'react';
import {withStyles} from 'material-ui/styles';
import OpenSource from '../images/opensource.png';
import Hyperapp from '../images/hyperapp.jpg';
import Vue from '../images/vue.png';
import Github from '../images/github.png';
import StyledLink from './StyledLink.jsx';

import Card, {CardContent, CardMedia, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

import CardStyle from '../styles/experienceCards';

import List, {ListItem, ListItemText} from 'material-ui/List';

const style = theme => ({
  ...CardStyle,
  media: {
    ...CardStyle.media,
    backgroundSize: 'contain'
  },
  button: {
    github: {
      margin: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit * 2
    }
  }
});

const CardExperience = props => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={OpenSource}
          title="OpenSource"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Contribution
          </Typography>
          <Typography component="p">
            I love open source and I try to contribute to it when I got some
            time. Here are some contributions I made
          </Typography>
          <List dense>
            <ListItem>
              <Avatar src={Vue} />
              <ListItemText
                primary={
                  <p>
                    (creator){' '}
                    <StyledLink href="https://github.com/titouancreach/vuejs-redux">
                      vuejs-redux
                    </StyledLink>
                  </p>
                }
                secondary="Highly scalable Redux connector to Vuejs component using render props"
              />
            </ListItem>
            <ListItem>
              <Avatar src={Hyperapp} />
              <ListItemText
                primary={
                  <p>
                    (contributor){' '}
                    <StyledLink href="https://github.com/hyperapp/hyperapp">
                      Hyperapp
                    </StyledLink>{' '}
                    and{' '}
                    <StyledLink href="https://github.com/hyperapp/fx">
                      Hyperapp/fx
                    </StyledLink>
                  </p>
                }
                secondary="1 kB JavaScript library for building web applications / Effect as data, pattern from ELM to handle side effects in functional applications"
              />
            </ListItem>
          </List>
          <Typography component="p">
            Most of the time, I use Vuejs, React in a esNext environment. I love
            trying some other languages such as{' '}
            <StyledLink href="http://elm-lang.org/">Elm</StyledLink> or
            <StyledLink href="https://reasonml.github.io/">
              {' '}
              Reason{' '}
            </StyledLink>.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button.github}
            href="https://github.com/titouancreach"
            color="default">
            My github profile
            <img
              className={classes.button.rightIcon}
              style={{marginLeft: 12}}
              src={Github}
            />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(style)(CardExperience);