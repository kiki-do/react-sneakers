import React from 'react';
import './App.css';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); // Это строка так как поиск
  const [favourite, setFavourite] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });

    axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/favourite').then((res) => {
      setFavourite(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62c29b14ff594c65675fefd6.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavourite = (obj) => {
    axios.post('https://62c29b14ff594c65675fefd6.mockapi.io/favourite', obj);
    setFavourite((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62c29b14ff594c65675fefd6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // const onRemoveFavourite = (id) => {
  //   axios.delete(`https://62c29b14ff594c65675fefd6.mockapi.io/favourite/${id}`);
  //   setFavourite((prev) => prev.filter((item) => item.id !== id));
  // };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              setSearchValue={setSearchValue}
              onAddToFavourite={onAddToFavourite}
            />
          }></Route>
        <Route
          path="favourite"
          exact
          element={<Favourite items={favourite} onAddToFavourite={onAddToFavourite} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
