import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

// data check, spell check
interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = (props: Props): JSX.Element => {
    const { id, searchResult, onPortfolioCreate } = props;
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
        >
            <h2 className="font-bold text-center text-black md:text-left">
                {searchResult.name} ({searchResult.symbol})
            </h2>
            <p className="text-black">{searchResult.currency}</p>
            <p className="font-bold text-black">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResult.symbol}
            />
        </div>
    );
};

export default Card;
