import React from 'react';
import './App.css';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Drawer from './components/Drawer/Drawer';
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
    async function fetchData() {
      const cartResponce = await axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/cart');
      const favouriteResponce = await axios.get(
        'https://62c29b14ff594c65675fefd6.mockapi.io/favourite',
      );
      const itemsResponce = await axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/items');

      setItems(itemsResponce.data);
      setCartItems(cartResponce.data);
      setFavourite(favouriteResponce.data);
    }

    fetchData();
  }, []);

  const countSneakers = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onAddToCart = async (obj) => {
    if (cartItems.find((item) => Number(item.productId) === Number(obj.productId))) {
      axios.delete(`https://62c29b14ff594c65675fefd6.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.productId) !== Number(obj.productId)),
      );
    } else {
      const { data } = await axios.post('https://62c29b14ff594c65675fefd6.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, data]);
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourite.find((findObj) => Number(findObj.productId) === Number(obj.productId))) {
        axios.delete(`https://62c29b14ff594c65675fefd6.mockapi.io/favourite/${obj.productId}`);
        setFavourite((prev) =>
          prev.filter((item) => Number(item.productId) !== Number(obj.productId)),
        );
      } else {
        const { data } = await axios.post(
          'https://62c29b14ff594c65675fefd6.mockapi.io/favourite',
          obj,
        );
        setFavourite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось');
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62c29b14ff594c65675fefd6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.productId !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          countSneakers={countSneakers}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} countSneakers={countSneakers} />

      <Routes>
        <Route
          path="/react-sneakers/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              setSearchValue={setSearchValue}
              onAddToFavourite={onAddToFavourite}
              cartItems={cartItems}
              favourite={favourite}
            />
          }></Route>
        <Route
          path="/react-sneakers/favourite"
          exact
          element={<Favourite items={favourite} onAddToFavourite={onAddToFavourite} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
