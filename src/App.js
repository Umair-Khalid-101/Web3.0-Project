import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x7BD2899D7DC8a05c81A044e7392F73081c1b08d9&order_direction=asc"
      );
      console.log(openSeaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmWcDDZedC8nsnmSHmiftQHWrUFUCp31DHLYq7ARPPXS7R"
      />
    </div>
  );
}

export default App;
