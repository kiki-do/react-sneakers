import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Drawer from './components/Drawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpened } from './store/slices/cartSlice';

function App() {
  const cartOpened = useSelector((state) => state.cartSlice.cartOpened);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper clear">
        {cartOpened && <Drawer onClose={() => dispatch(setCartOpened(false))} />}
        <Header onClickCart={() => dispatch(setCartOpened(true))} />
        <Routes>
          <Route path="/react-sneakers/" exact element={<Home />}></Route>
          <Route path="/react-sneakers/favourite" exact element={<Favourite />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
