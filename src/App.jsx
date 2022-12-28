import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './context/CartContextProvider/CartContextProvider'
import CartListContainer from './components/CartListContainer/CartListContainer'
import OrderFinishedContainer from './components/OrderFinishedContainer/OrderFinishedContainer'
import Footer from './components/Footer/Footer'
import NotFoundOrError from './components/NotFoundOrError/NotFoundOrError'

function App() {
    //Componente principal con el routing para las diferentes categorias, el detalle de producto y uno generico para rutas que no tienen componente asociado.
    return (
        //justify-content-between
        <div className='min-vh-100 d-flex flex-column'>
            < BrowserRouter >
                < CartContextProvider>
                    < NavBar />
                    <Routes>
                        <Route path='/' element={< ItemListContainer />} />
                        <Route path='/category/:idCategory' element={< ItemListContainer />} />
                        <Route path='/detail/:idProduct' element={< ItemDetailContainer />} />
                        <Route path='/cart' element={< CartListContainer />} />
                        <Route path='/orderfinished/:idOrder' element={< OrderFinishedContainer />} />
                        <Route path='/notfoundorerror/:idError' element={< NotFoundOrError />} /> 
                        <Route path='*' element={<Navigate to={'/notfoundorerror/pagina-no-encontrada'} />} />
                    </Routes>
                </ CartContextProvider>
            </ BrowserRouter >
            < Footer />
        </div>
    )
}

export default App