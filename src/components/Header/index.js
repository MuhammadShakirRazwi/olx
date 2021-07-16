import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import Logo from "./assets/olx-logo.svg";
import Dropdown from "./assets/dropdown.svg";
import LoginModal from "../LoginModal";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navgrid: {
    backgroundColor: "#f7f8f8",
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Header({ handleScreenChange }) {
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useState(false);

  const handleOpen = () => setToggleModal(true);
  const handleClose = () => setToggleModal(false);
  return (
    <div className={classes.root}>
      <header className="header">
        <LoginModal toggleModal={toggleModal} handleClose={handleClose} />
        <Grid container className={classes.navgrid} spacing={2}>
          <Grid item className="logoWrapper">
            <div className="logo-container">
              <img src={Logo} alt="nothing" />
            </div>
          </Grid>
          <Grid item className="areaSearchWrapper">
            <div className="search-container">
              <div className="search-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path>
                </svg>
              </div>
              <input
                spellCheck="false"
                className="search-input"
                autoComplete="off"
                placeholder="Search city, area or locality"
              />
              <div className="search-dropdown-container">
                <img
                  src={Dropdown}
                  alt="dropdown trigger"
                  className="search-dropdown"
                />
              </div>
            </div>
          </Grid>
          <Grid item className="itemSearchWrapper" xs={6}>
            <div className="item-search-container">
              <div className="item-search-input-container">
                <div className="item-search-input-container-main">
                  <input
                    spellcheck="false"
                    className="input-field"
                    autocomplete="off"
                    placeholder="Find Cars, Mobile Phones and more..."
                  />
                </div>
              </div>
              <button aria-label="Search" className="item-search-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 1024 1024"
                  class="_020c04b8"
                >
                  <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path>
                </svg>
              </button>
            </div>
          </Grid>
          <Grid item>
            <div className="Login">
              <button onClick={handleOpen}>Login/SignUp</button>
            </div>
          </Grid>
          <Grid item>
            <button
              className="sell-button"
              onClick={() => {
                handleScreenChange([], "add-item");
              }}
            >
              Sell
            </button>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}
