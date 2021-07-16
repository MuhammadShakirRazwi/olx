import { useState, useEffect } from "react";
import Homepage from "./screens/Homepage";
import AdDetails from "./screens/AdDetails";
import { getAllAds } from "./config/firebase";
import FormPage from "./screens/FormPage";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";

function App() {
  const [tempAd, setTempAd] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [ads, setAds] = useState([]);
  useEffect(() => {
    getAllAds((data) => {
      setAds([...data]);
    });
  }, []);

  const handleScreenChange = (item, screenName) => {
    setTempAd(item);
    setCurrentScreen(screenName);
  };
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header handleScreenChange={handleScreenChange} />
        </Grid>
        {currentScreen === "home" ? (
          <Grid item xs={12}>
            <Homepage data={ads} handleScreenChange={handleScreenChange} />
          </Grid>
        ) : currentScreen === "ad-details" ? (
          <Grid item xs={12}>
            <AdDetails data={tempAd} />
          </Grid>
        ) : currentScreen === "add-item" ? (
          <Grid item xs={12}>
            <FormPage />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default App;
