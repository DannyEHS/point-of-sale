import { useState } from "react";

const useFilterUsers = (users: any[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUser = users.filter(
        (user) => 
            user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.password.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.rol.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        searchTerm,
        setSearchTerm,
        filteredUser,
    };
}

export default useFilterUsers;