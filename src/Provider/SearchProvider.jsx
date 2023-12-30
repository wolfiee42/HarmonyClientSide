/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthSearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');

    const updatedSearch = result => {
        setSearch(result)
    }
    const searchInfo = {
        search: search,
        updatedSearch: updatedSearch
    }
    return (
        <AuthSearchContext.Provider value={searchInfo} >
            {children}
        </AuthSearchContext.Provider>
    );
};

export default SearchProvider;