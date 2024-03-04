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

        
        // <>
        //     <form onSubmit={onSearchSubmit}>
        //         <input value={search} onChange={handleSearchChange} />
        //         <button type="submit">Search</button>
        //     </form>
        // </>

        <section className="relative bg-gray-100">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                <form
                    className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
                    onSubmit={onSearchSubmit}
                >
                    <input
                        className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
                        id="search-input"
                        placeholder="Search companies"
                        value={search}
                        onChange={handleSearchChange}
                    ></input>
                </form>
            </div>
        </section>
    );
};

export default Search;
