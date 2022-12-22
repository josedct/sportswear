import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './context/CartContextProvider/CartContextProvider'
import CartListContainer from './components/CartListContainer/CartListContainer'

function App() {
  //Componente principal con el routing para las diferentes categorias, el detalle de producto y uno generico para rutas que no tienen componente asociado.
  return (
    <div className="App">
      < BrowserRouter >
      < CartContextProvider>
        < NavBar />
        <Routes>
          <Route path='/' element={< ItemListContainer />} />
          <Route path='/categoria/:idCategory' element={< ItemListContainer />} />
          <Route path='/detalle/:idProduct' element={ < ItemDetailContainer />  } />
          <Route path='/carrito' element={< CartListContainer />} />
          <Route path='*' element={ <Navigate to={'/'} /> }/>
        </Routes>
      </ CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
