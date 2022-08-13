import React from "react"
import "./Searchbar.css"

const SearchbarItem = ({ children }) => {
    return (
        <div>
            <button>
                {children}
            </button>
        </div>
    )
}

const Searchbar = () => {
    return (
        <div className="Searchbar" style={{ display: "flex", justifyContent: "space-around" }}>
            <SearchbarItem>
                Main Page
            </SearchbarItem>
            <SearchbarItem>
                Add New Plant
            </SearchbarItem>
        </div>
    )
}

export default Searchbar