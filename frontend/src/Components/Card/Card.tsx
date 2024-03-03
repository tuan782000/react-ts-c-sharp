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
        <div className="card" id={id}>
            <img alt="company logo" />
            <div className="details">
                <h2>
                    {searchResult.name} ({searchResult.symbol})
                </h2>
                <p>$ {searchResult.currency}</p>
            </div>
            <p className="info">
                {searchResult.stockExchange} - {searchResult.stockExchange}
            </p>
            <AddPortfolio
                onPortfolioCreate={onPortfolioCreate}
                symbol={searchResult.symbol}
            />
        </div>
    );
};

export default Card;
