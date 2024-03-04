import "./CardList.css";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
import { SyntheticEvent } from "react";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    const { searchResults, onPortfolioCreate } = props;
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card
                            id={result.symbol}
                            key={uuidv4()}
                            searchResult={result}
                            onPortfolioCreate={onPortfolioCreate}
                        />
                    );
                })
            ) : (
                <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                    No results!
                </p>
            )}
        </>
    );
};

export default CardList;
