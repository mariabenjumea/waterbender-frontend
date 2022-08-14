import React from "react"
import "./Searchbar.css"
import LoginPage from "./LoginPage"
import AddPlant from "./AddPlant"

const SearchbarItem = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const Searchbar = () => {
    return (
        <div className="Searchbar" style={{ display: "flex", justifyContent: "space-around" }}>
            <SearchbarItem>
                <AddPlant />
            </SearchbarItem>
            <SearchbarItem>
                <LoginPage />
            </SearchbarItem>

        </div>
    )
}

export default Searchbar