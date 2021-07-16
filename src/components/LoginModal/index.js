import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { registerUser, loginUser } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { storeUser } from "../../actions";

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMail = (e) => setEmail(e.target.value);
  const handlePass = (e) => setPassword(e.target.value);
  const handleSubmit = async () => {
    try {
      const user = await loginUser(email, password);
      dispatch(storeUser(user));
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Sign In</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="outlined-full-width"
            label="Email"
            style={{ margin: 8 }}
            placeholder="abc@gmail.com"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => handleMail(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="outlined-full-width"
            label="Password"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            type="password"
            onChange={(e) => handlePass(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password, name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Sign Up</h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-full-width"
              label="Your Name"
              style={{ margin: 8 }}
              placeholder="John doe"
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
              label="Email"
              style={{ margin: 8 }}
              placeholder="abc@gmail.com"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(e) => handleEmail(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-full-width"
              label="Password"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              type="password"
              onChange={(e) => handlePassword(e)}
            />
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
    </>
  );
}
const useStyles = makeStyles(() => ({
  modalContainer: {
    maxWidth: "1280px",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function LoginModal({ toggleModal, handleClose }) {
  const classes = useStyles();
  // States
  const [currentView, setCurrentView] = useState("signup");

  // Creating Modal's Body
  const body = (
    <div className={classes.modalContainer}>
      {currentView === "signup" ? <SignUp /> : <SignIn />}
      <div className="sign-in-up-text">
        {currentView === "signup" ? (
          <span>
            Already have Account?{" "}
            <button onClick={() => setCurrentView("signin")}>Log in</button>
          </span>
        ) : (
          <span>
            Don't have an account{" "}
            <button onClick={() => setCurrentView("signup")}>Sign Up</button>
          </span>
        )}
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        open={toggleModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
