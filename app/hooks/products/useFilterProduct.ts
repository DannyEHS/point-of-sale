import { useState } from "react";

const useFilterProducts = (products: any[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(
        (product) =>
          product.barCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.name.toLowerCase().includes(searchTerm.toLowerCase()) 
      );

    return {
        searchTerm,
        setSearchTerm,
        filteredProducts,
    };
}

export default useFilterProducts;