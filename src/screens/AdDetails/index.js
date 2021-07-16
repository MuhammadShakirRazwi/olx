import React from "react";
import Grid from "@material-ui/core/Grid";
import "./index.css";

export default function AdDetails(props) {
  return (
    <div>
      <div className="main">
        <Grid container>
          <Grid container item xs={9}>
            <div className="left-wrap">
              <div className="pic-wrap">
                <img
                  src={props.data.picURL[0]}
                  alt=""
                  className="pic12"
                  height="400"
                />
              </div>
              <div className="details-wrap">
                <div>Price:{props.data.price}</div>
                <div>Type:{props.data.category}</div>
                <div>Condition:{props.data.condition}</div>
              </div>
              <div>Description:{props.data.description}</div>
            </div>
          </Grid>
          <Grid container item xs={3}>
            <div className="right-wrap">
              <div>Karachi,Pakistan</div>
              <div>{props.data.price}</div>
              <div>{props.data.title}</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
