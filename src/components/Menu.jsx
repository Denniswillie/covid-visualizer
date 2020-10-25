import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const classes = useStyles();
  return <div className={classes.root}>
    <AppBar position="static" style={{backgroundColor: "orange"}}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Global Covid Visualizer
        </Typography>
        <DropdownButton id="dropdown-basic-button" title="Display specific continent">
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>All</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>Europe</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>Asia</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>Africa</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>North America</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>South America</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>Antarctica</Dropdown.Item>
          <Dropdown.Item onClick={(e) => {props.handleButtonClick(e.target.innerText)}}>Oceania</Dropdown.Item>
        </DropdownButton>
      </Toolbar>
    </AppBar>
  </div>
}
