import { BrowserRouter } from "react-router-dom";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/header";
import { Main } from "./modules/main";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App
