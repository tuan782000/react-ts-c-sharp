import React, { ChangeEvent, SyntheticEvent } from "react";
import "./Search.css";

interface Props {
    // onClick: (e: SyntheticEvent) => void;
    // search: string | undefined;
    // handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    // const { onClick, search, handleChange } = props;
    const { onSearchSubmit, search, handleSearchChange } = props;
    return (
        // <div>
        //     <input
        //         type="text"
        //         value={search}
        //         onChange={(e) => handleChange(e)}
        //     />
        //     <button onClick={(e) => onClick(e)}>Submit</button>
        // </div>
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default Search;
