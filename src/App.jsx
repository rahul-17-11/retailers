import { useEffect } from "react";
import "./App.css";
import RetailerAndLocationTemplate from "./components/RetailerAndLocationTemplate";
import { useGeoStore } from "./store/useGeoStore";

function App() {
  const { getGeoLocation } = useGeoStore();

  useEffect(() => {
    getGeoLocation();
  }, []);

  return (
    <>
      <RetailerAndLocationTemplate />
    </>
  );
}

export default App;
