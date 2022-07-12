import React from 'react';
import Card from '../components/Card/Card';

function Favourite({ items, onAddToFavourite, id }) {
  return (
    <div>
      <div className="favourite">Мои закладки</div>
      {items.length > 0 ? (
        <section>
          {items.map((item, index) => (
            <Card
              id={item.id}
              key={index} // Желательно указывать конкретное значение в нашем случае можно указать title, price...
              imageUrl={item.imageUrl}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item}
            />
          ))}
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
}

export default Favourite;
