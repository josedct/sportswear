import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  //Componente principal con el routing para las diferentes categorias, el detalle de producto y uno generico para rutas que no tienen componente asociado.
  return (
    <div className="App">
      < BrowserRouter >
        < NavBar />
        <Routes>
          <Route path='/' element={< ItemListContainer />} />
          <Route path='/categoria/:idCategory' element={< ItemListContainer />} />
          <Route path='/detalle/:idProduct' element={ < ItemDetailContainer />  } />
          <Route path='*' element={ <Navigate to={'/'} /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
