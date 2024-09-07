import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import WineComing from "./components/WineComing/WineComing";


function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <ItemListContainer greeting="Se aproxima una nueva experiencia para los amantes del vino..." />
        <WineComing />
      </ChakraProvider>
    </>
  );
}

export default App;
