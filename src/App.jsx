import { useEffect } from "react";
import "./App.css";
import RetailerAndLocationTemplate from "./components/RetailerAndLocationTemplate";
import { useGeoStore } from "./store/useGeoStore";

function App() {
  const { getVisitorsIp, fetchIpInfo } = useGeoStore();

  useEffect(() => {
    getVisitorsIp();
    fetchIpInfo();
  }, []);

  return (
    <>
      <RetailerAndLocationTemplate />
    </>
  );
}

export default App;
