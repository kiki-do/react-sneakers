import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import { fetchSneakers } from '../store/thunk/get/fetchSneakers';
import { setModalOpened, setSearchValue } from '../store/slices/sneakersSlice';
import Modal from '../components/Modal/Modal';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.sneakersSlice.items);
  const searchValue = useSelector((state) => state.sneakersSlice.searchValue);
  const modalOpened = useSelector((state) => state.sneakersSlice.modalOpened);

  const getSneakers = () => {
    dispatch(fetchSneakers());
  };

  const onClickImg = () => {
    dispatch(setModalOpened(true));
  };

  React.useEffect(() => {
    getSneakers();
  }, []);

  const onChangeSearchInput = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <div>
      <div className="main">
        {/* {modalOpened && <Modal onClose={() => dispatch(setModalOpened(false))} />} */}
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img src="img/search.svg" alt="search" className="search-img" />
          {searchValue && (
            <img
              onClick={() => dispatch(setSearchValue(''))}
              src="img/remove.svg"
              alt="remove"
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
          .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((items) => (
            <Card
              key={items.id} // Желательно указывать конкретное значение в нашем случае можно указать title, price...
              items={items}
              onClickImg={onClickImg}
            />
          ))}
      </section>
    </div>
  );
};

export default Home;
