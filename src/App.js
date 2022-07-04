import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); // Это строка так как поиск

  React.useEffect(() => {
    axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get('https://62c29b14ff594c65675fefd6.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62c29b14ff594c65675fefd6.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://62c29b14ff594c65675fefd6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="main">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img src="img/search.svg" alt="" className="search-img" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              src="img/remove.svg"
              alt=""
              className="remove-svg"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type=""
            placeholder="Поиск..."
          />
        </div>
      </div>
      <section>
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index} // Желательно указывать конкретное значение в нашем случае можно указать title, price...
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(item)}
            />
          ))}
      </section>
    </div>
  );
}

export default App;
