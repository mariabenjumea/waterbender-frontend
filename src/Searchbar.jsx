import React from "react"

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
            {/* <SearchbarItem>
                <AddPlant />
            </SearchbarItem>
            <SearchbarItem>
                <LoginPage />
            </SearchbarItem> */}

        </div>
    )
}

export default Searchbar