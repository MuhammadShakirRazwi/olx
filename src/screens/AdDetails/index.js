import React, { useState } from "react";
import Header from "../../components/Header";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import "./index.css";

export default function AdDetails(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Header />
      <div className="main">
        <Modal
          style={{ top: "40%", left: "40%" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="modalset">
            <table>
              <tr>
                <td>
                  <label htmlFor="username">Your Name</label>
                </td>
                <td>
                  <input type="text" name="username" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="contact">Contact</label>
                </td>
                <td>
                  <input type="text" name="contact" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="title">Add Title</label>
                </td>
                <td>
                  <input type="text" name="title" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="price">Add Price</label>
                </td>
                <td>
                  <input type="text" name="price" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">Location</label>
                </td>
                <td>
                  <input type="text" name="location" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="condition">Condition</label>
                </td>
                <td>
                  <select name="condition" id="">
                    <option value="used">used</option>
                    <option value="new">new</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="type">Type</label>
                </td>
                <td>
                  <input type="text" name="type" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description">Description</label>
                </td>
                <td>
                  <input type="text" name="description" />
                </td>
              </tr>
            </table>
          </div>
        </Modal>
        <Grid container>
          <Grid container item xs={9}>
            <div className="left-wrap">
              <div className="pic-wrap">
                <img
                  src={props.data.picURL}
                  alt=""
                  className="pic12"
                  height="400"
                />
              </div>
              <div className="details-wrap">
                <div>Price:{props.data.price}</div>
                <div>Type:{props.data.type}</div>
                <div>Condition:{props.data.condition}</div>
              </div>
              <div>Description:{props.data.description}</div>
            </div>
          </Grid>
          <Grid container item xs={3}>
            <div className="right-wrap">
              <div>{props.data.location}</div>
              <div>{props.data.price}</div>
              <div>{props.data.title}</div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </div>
  );
}
