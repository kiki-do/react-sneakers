import Card from '../components/Card/Card';

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavourite,
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
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavourite={(obj) => onAddToFavourite(obj)}
            />
          ))}
      </section>
    </div>
  );
}

export default Home;
