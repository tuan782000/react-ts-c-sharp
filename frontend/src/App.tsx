import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";

function App() {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setSearch(e.target.value);
    //     console.log(e);
    // };
    // const onClick = async (e: SyntheticEvent) => {
    //     const result = await searchCompanies(search);
    //     if (typeof result === "string") {
    //         setServerError(result);
    //     } else if (result && Array.isArray(result.data)) {
    //         setSearchResults(result.data);
    //     }
    //     console.log(searchResults);
    // };
    const onPortfolioCreate = (e: any) => {
        // không cho reload lại trang e.preventDefault()
        e.preventDefault();
        // kiểm tra xem danh sách hiện tại có card đó chưa nếu có thì return không cho add
        const exists = portfolioValues.find(
            (value) => value === e.target[0].value
        );
        if (exists) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
        console.log(e);
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        });
        setPortfolioValues(removed);
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (result && Array.isArray(result.data)) {
            setSearchResults(result.data);
        }
        console.log(searchResults);
        setSearch("");
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        // console.log(e);
    };
    return (
        <div className="App">
            <Navbar />
            {/* <Hero /> */}
            <Search
                // onClick={onClick}
                onSearchSubmit={onSearchSubmit}
                search={search}
                // handleChange={handleChange}
                handleSearchChange={handleSearchChange}
            />
            <ListPortfolio
                portfolioValues={portfolioValues}
                onPortfolioDelete={onPortfolioDelete}
            />
            <CardList
                searchResults={searchResults}
                onPortfolioCreate={onPortfolioCreate}
            />
            {serverError && <div>Unable to connect to API</div>}
        </div>
    );
}

export default App;
