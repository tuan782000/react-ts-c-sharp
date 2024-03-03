## Forms

React Form "Vortex"

```jsx
// điểm thứ 1
const [name, setName] = useState('');

// điểm thứ 2
<form onSubmit={handleSubmit}></form>

// điểm thú 3
<input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
// khi input thay đổi sự kiện e được gửi đi và setName sẽ set lại name, lúc này value sẽ được cập nhật lại
```

AddProtfolio.tsx: mình truyền từ App xuống CardList xuống Card xuống Portfolio thông qua props và mình truyền onPortfolioCreate: (e: SyntheticEvent) => void;

Tái cấu trúc lại thằng Search

```jsx
import React, { ChangeEvent, SyntheticEvent } from "react";
import "./Search.css";

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const { onSearchSubmit, search, handleSearchChange } = props;
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default Search;
```

App.tsx

```jsx
const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
        setServerError(result);
    } else if (result && Array.isArray(result.data)) {
        setSearchResults(result.data);
    }
    console.log(searchResults);
};

const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
};

<Search
    // onClick={onClick}
    onSearchSubmit={onSearchSubmit}
    search={search}
    // handleChange={handleChange}
    handleSearchChange={handleSearchChange}
/>;
```
