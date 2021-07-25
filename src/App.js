import React, {useState} from "react";
import Header from "./header/Header"
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

const AppContenxt = React.createContext();

const App = () => {
  const [inputText, setInputText] = useState();
  const [isToggle, setToggle] = useState(false);
  const [order, setOrder] = useState();

  return (
    <>
      <AppContenxt.Provider value={{inputText, setInputText, setToggle, isToggle, setOrder, order}} >
      <Modal />
      <Header />
      <Content />
      <Footer />
      </AppContenxt.Provider>
    </>
  );
}

export default App;
export {AppContenxt};

