import Item from "./Item"


const ItemList = ({ category }) => {
  return (
    <>
      {category.products.map((p) => {
        console.log(p.id);
        return (
          <Item
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            stock={p.stock}
            image={p.image}
            alt={p.alt}
          />
        );
      })}
    </>
  );
};

export default ItemList;