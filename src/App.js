import { useState, useEffect } from "react";
import Homepage from "./screens/Homepage";
import AdDetails from "./screens/AdDetails";
import { getAllAds } from "./config/firebase";

function App() {
  const [tempAd, setTempAd] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [ads, setAds] = useState([]);
  const data = [
    {
      picURL:
        "https://cdn.jsdelivr.net/gh/MuhammadShakirRazwi/CDNcontent@main/sofa.jfif",
      price: "30000RS",
      title: "Sofa",
      location: "Karachi,Pakistan",
      condition: "used",
      type: "furniture",
      description: "lorem ipsum dolor sit amet",
    },
  ];
  useEffect(async () => {
    getAllAds((data) => {
      setAds([...data]);
    });
  }, []);

  const handleScreenChange = (item) => {
    setTempAd(item);
    setCurrentScreen("ad-details");
  };
  return (
    <div className="App">
      {currentScreen === "home" ? (
        <Homepage data={ads} handleScreenChange={handleScreenChange} />
      ) : (
        <AdDetails data={tempAd} />
      )}
    </div>
  );
}

export default App;
