import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import { clearFavourite } from '../store/slices/favouriteSlice';

const Favourite = () => {
  const items = useSelector((state) => state.favouriteSlice.items);
  const dispatch = useDispatch();

  const onClickButton = () => {
    dispatch(clearFavourite());
  };

  return (
    <div>
      <div className="favourite">Мои закладки</div>
      {items.length > 0 ? (
        <section>
          {items.map((items, index) => (
            <Card key={index} items={items} />
          ))}
          <button className="favourite__button" onClick={onClickButton}>
            Очистить корзину
          </button>
        </section>
      ) : (
        <div className="empty_favourite">
          <img src="img/sad_smile.svg" alt="sad" />
          <h2 className="favourite_text">Закладок нет</h2>
          <div className="favourite_subtitle"> Вы ничего не добавляли в закладки</div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
