import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import Card from "../Components/Card.jsx";

const ListPage = () => {
  const { products } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setFiltered(products);
  }, [products]);

  useEffect(() => {
    let data = products;

    if (query.trim()) {
      data = data.filter((x) =>
        x.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category) {
      data = data.filter((x) => x.category === category);
    }

    setFiltered(data);
  }, [query, category, products]);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>

      <div className="flex gap-4 mb-4">
        <input
          onInput={(e) => setQuery(e.target.value)}
          placeholder="Search product..."
          className="border p-2 rounded"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Breads">Breads</option>
            <option value="Muffins">Muffins</option>
            <option value="Rolls, Buns">Rolls, Buns</option>
            <option value=" Coffee "> Coffee </option>
        </select>
      </div>

      {filtered.length === 0 && (
        <h2 className="text-gray-500 text-lg">No Products Found</h2>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filtered.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
