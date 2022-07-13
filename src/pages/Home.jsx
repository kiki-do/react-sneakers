import Card from '../components/Card/Card';
import Favourite from './Favourite';
function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavourite,
  cartItems,
  favourite,
}) {
  return (
    <div>
      <div className="main">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img src="img/search.svg" alt="search" className="search-img" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
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
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index} // Желательно указывать конкретное значение в нашем случае можно указать title, price...
              {...item}
              onPlus={(obj) => onAddToCart(obj)}
              onFavourite={(obj) => onAddToFavourite(obj)}
              liked={cartItems.some((obj) => obj.productId === item.productId)}
              favourited={favourite.find((obj) => obj.productId === item.productId)}
            />
          ))}
      </section>
    </div>
  );
}

export default Home;
