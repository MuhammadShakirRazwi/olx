import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import "./index.css";
import Dropdown from "./dropdown.svg";

export default function Homepage(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <div className="bc-container">
            <div className="bcrumbs-container">
              <Grid container spacing={2}>
                <Grid item>
                  <div className="all-categories">
                    All categories
                    <img
                      src={Dropdown}
                      className="d-down"
                      alt="Dropdown arrow"
                    ></img>
                  </div>
                </Grid>
                <Grid item>
                  <div className="mobiles">Mobile Phones</div>
                </Grid>
                <Grid item>
                  <div className="cars">Cars</div>
                </Grid>
                <Grid item>
                  <div className="motor">Motorcycles</div>
                </Grid>
                <Grid item>
                  <div className="house">Houses</div>
                </Grid>
                <Grid item>
                  <div className="tv">TV-video-audio</div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="banner"></div>
        </Grid>
        <Grid item xs={12}>
          <div className="items-container">
            <Grid container>
              <Grid item xs={12}>
                <span className="fresh-txt">Fresh Recommendations</span>
              </Grid>
              <Grid container item xs={12} spacing={2}>
                {props.data.map((item) => (
                  <Grid item xs={3} key={item.id}>
                    <div
                      className="item"
                      onClick={() => {
                        props.handleScreenChange(item);
                      }}
                    >
                      <div className="pic-container">
                        <picture className="pic">
                          <img
                            src={item.picURL}
                            alt="nothing"
                            height="158"
                            width="auto"
                          />
                        </picture>
                      </div>
                      <div className="item-detail-container">
                        <div className="price-title">
                          <div className="price">{item.price}</div>
                          <div className="title">{item.title}</div>
                        </div>
                        <div className="location">{item.location}</div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
