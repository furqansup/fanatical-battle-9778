import React, { useState } from "react";


function Product() {
  const [items, setItems] = useState([
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Mobile",
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Laptop",
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Television",
    },
    {
      id: 4,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Refrigerator",
    },
    {
      id: 5,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Headphone",
    },
    {
      id: 6,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Speaker",
    },
    {
      id: 7,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Blender",
    },
    {
      id: 8,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Iron",
    },
    {
      id: 9,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Mixer",
    },
    {
      id: 10,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Fan",
    },
    {
      id: 11,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Table",
    },
    {
      id: 12,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Chair",
    },
    {
      id: 13,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Camera",
    },
    {
      id: 14,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Printer",
    },
    {
      id: 15,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "PenDrive",
    },
    {
      id: 16,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Hair Dryer",
    },
    {
      id: 17,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Watch",
    },
    {
      id: 18,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Toys",
    },
    {
      id: 19,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Books",
    },
    {
      id: 20,
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Shoes",
    },
  ]);

  //filter items
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  //sorting items
  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const filteredItems = items
    .filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === "ascending") {
        return a.title.localeCompare(b.title);
      } else if (sort === "descending") {
        return b.title.localeCompare(a.title);
      }
    });

  //add to cart
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="product">
      <div className="filter-sort">
        <div className="filter">
          <label>Filter: </label>
          <input type="text" value={filter} onChange={handleFilter} />
        </div>
        <div className="sort">
          <label>Sort: </label>
          <select value={sort} onChange={handleSort}>
            <option value="">None</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div className="products">
        {filteredItems.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.img} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;