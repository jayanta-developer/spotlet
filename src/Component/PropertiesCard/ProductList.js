import React, { useState, useEffect } from "react";
import "./style.css";
// import ProductCard from "./ProductCard";
import { propertiesCard } from "./index";

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";

const ProductList = ({ productsPerPage, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    // Update displayedProducts whenever currentPage changes
    const startIdx = (currentPage - 1) * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    setDisplayedProducts(products.slice(startIdx, endIdx));
  }, [currentPage, products, productsPerPage]);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="productContainer">
        {displayedProducts.map((product, index) =>
          // <ProductCard key={index} name={product.name} price={product.price} />
          propertiesCard(
            product.image,
            product.cardId,
            product.price,
            product.location,
            product.subLocation,
            product.iconArray,
            product.remove,
            product.compare,
            product.bottomM
          )
        )}
      </div>
      <div className="paginationContainer">
        {/* Left arrow button */}
        <span
          className={`paginationButton ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevPage}
        >
          {"<"}
        </span>
        {/* Generate page number buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`paginationButton ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        {/* Right arrow button */}
        <span
          className={`paginationButton ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={handleNextPage}
        >
          {">"}
        </span>
      </div>
    </div>
  );
};

export default ProductList;
