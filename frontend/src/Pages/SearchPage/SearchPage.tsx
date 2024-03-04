import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
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
        <>
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
        </>
    );
};

export default SearchPage;
