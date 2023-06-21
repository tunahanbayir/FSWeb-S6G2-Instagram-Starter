import React, { useState } from "react";

import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import sahteVeri from "./sahte-veri";

import "./App.css";

const App = () => {
const [ gonderiler, setGonderiler] = useState(sahteVeri);
const [searchText, setSearchText]= useState("");
  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map(gonderi => {
      if (gonderi.id === gonderiID) {
        gonderi.likes++;
      }
       return gonderi;
    });
      
setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      <AramaCubugu />
      <Gonderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} />

     
    </div>
  );
};

export default App;
