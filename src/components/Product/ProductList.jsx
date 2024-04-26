import React, { useState } from "react";
import ProductItem from "./ProductItem";

import { products } from "../../Data/ProductData";

import Button from "../../UI/Buttons/Button";



function ProductList() {

  // state alanı
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filtreleme fonksiyonu
  const filterProducts = (category) => {
    if (category === "Hepsi") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="mt-10 text-center">
      <h1 className="font-medium text-5xl mb-5">Ürünlerimiz</h1>

      {/* Buttonların tümü */}
      <Button onClick={() => filterProducts("Hepsi")}>Hepsi</Button>
      <Button onClick={() => filterProducts("Kişisel Bakım")}>Kişisel Bakım</Button>
      <Button onClick={() => filterProducts("Mutfak")}>Mutfak</Button>
      <Button onClick={() => filterProducts("Giyim")}>Giyim</Button>
      
      <div className="flex justify-center items-center gap-5">

        {/* Product Maps */}
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            imgUrl={product.imgUrl}
            name={product.name}
            content={product.content}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
