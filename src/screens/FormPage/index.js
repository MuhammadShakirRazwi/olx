import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { uploadAd } from "../../config/firebase";
import { uploadImages } from "../../config/firebase";
import { v4 as uuidv4 } from "uuid";

const conditions = ["New", "Used"];

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heading: {
    textTransform: "uppercase",
  },
  input: {
    display: "none",
  },
}));

export default function FormPage() {
  const classes = useStyles();
  const [condition, setCondition] = useState("New");
  const [uploadCounter, setUploadCounter] = useState(1);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const handleChange = (event) => {
    setCondition(event.target.value);
  };
  const handleName = (e) => setName(e.target.value);
  const handleNumber = (e) => setNumber(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage([...image, e.target.files]);

  const uploadOptions = [];
  for (let i = 0; i < uploadCounter; i++) {
    uploadOptions.push(
      <Grid item xs={12}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          type="file"
          onChange={(e) => handleImage(e)}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
      </Grid>
    );
  }
  const handleUploadCounter = () => {
    if (uploadCounter < 5) {
      setUploadCounter(uploadCounter + 1);
    } else {
      alert("you can add only 5 pictures per item");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const data = {
      id,
      name,
      number,
      title,
      price,
      category,
      condition,
      description,
      picURL: [],
    };
    uploadAd(data);
    uploadImages(image, data.id);
  };
  return (
    <div>
      <div className={classes.container}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2 className={classes.heading}>Personal Details</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                label="Full Name"
                style={{ margin: 8 }}
                placeholder="Your Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => handleName(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                label="Phone Number"
                style={{ margin: 8 }}
                placeholder="0301-0000011"
                helperText="WHY? SO PEOPLE CAN CONTACT YOU"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => handleNumber(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <h2 className={classes.heading}>item details</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                label="Title"
                style={{ margin: 8 }}
                placeholder="Iphone XS Max Pro"
                helperText="THIS WILL BE SHOWN ON MAIN PAGE"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => handleTitle(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                label="Item Price"
                style={{ margin: 8 }}
                placeholder="1500"
                helperText="AMMOUNT WILL BE CONSIDERED IN PKR"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => handlePrice(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                label="Category"
                style={{ margin: 8 }}
                placeholder="Mobile"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => handleCategory(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                id="outlined-full-width"
                label="Condtion"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={handleChange}
                value={condition}
              >
                {conditions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                label="Description"
                style={{ margin: 8 }}
                rows={4}
                placeholder="Details"
                fullWidth
                multiline
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => handleDescription(e)}
              />
            </Grid>
            {uploadOptions}
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleUploadCounter}>
                ADD MORE PICs
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
