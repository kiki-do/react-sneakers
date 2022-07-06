import React from 'react';
import Card from '../components/Card/Card';

function Favourite({ items, onAddToFavourite }) {
  return (
    <div>
      <div className="favourite">Мои закладки</div>

      <section>
        {items.length &&
          items?.map((item, index) => (
            <Card
              key={index} // Желательно указывать конкретное значение в нашем случае можно указать title, price...
              imageUrl={item.imageUrl}
              favourited
              onFavourite={onAddToFavourite}
              {...item}
            />
          ))}
      </section>
    </div>
  );
}

export default Favourite;
