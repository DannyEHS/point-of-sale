import { useState } from "react";

const useFilterCategories = (categories: any[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCategory = categories.filter(
        (category) => 
            category.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        searchTerm,
        setSearchTerm,
        filteredCategory,
    };
}

export default useFilterCategories;