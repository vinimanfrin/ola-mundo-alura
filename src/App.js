import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";


function App() {
  return (
    <BrowserRouter>
    <Menu/>

      <Routes>
          <Route path="/" element={<PaginaPadrao/>}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/sobremim" element={<SobreMim/>} />
          </Route>
          
        
       
        
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}



export default App;
