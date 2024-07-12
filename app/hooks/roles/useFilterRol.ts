import { useState } from "react";

const useFilteredRoles = (roles: any[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoles = roles.filter(
    (rol) =>
      rol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rol.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredRoles,
  };
};

export default useFilteredRoles;
