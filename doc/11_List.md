## List

App.tsx

```js
import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
    const [search, setSearch] = useState<string>("");
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string|null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };
    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
        if(typeof result === 'string'){
            setServerError(result);
        } else if(result && Array.isArray(result.data)) {
            setSearchResults(result.data)
        }
        console.log(searchResults);
    };
    return (
        <div className="App">
            <Search
                onClick={onClick}
                search={search}
                handleChange={handleChange}
            />
            <CardList searchResults={searchResults} />
            {serverError && <div>Unable to connect to API</div>}
        </div>
    );
}

export default App;

```

Người dùng nhấn vào button có sự kiện onClick gọi tới api, ví dụ như có kết quả trả về thành công setSearchResults diễn ra, nó sẽ cập nhật lại cái thằng searchResults, đồng thời thằng CardList có sử dụng searchResults(này là mảng) truyền như props xuống cho component CardList.

Dựa theo interface Props của CardList thì searchResults là 1 mảng có kiểu dữ liệu CompanySearch được lấy từ company.ts

Sau khi hứng được dữ liệu truyền xuống thông qua props. Tôi sử dụng cú pháp destructuring để giải props này ra thành biến cho dễ dùng

Trong tsx thì chỉ cần searchResults. mọi thứ đều truy cập được

Vì nó là danh sách nên dùng hàm map để giải ra từng phần tử trong mảng

Sẽ có 2 trường hợp xảy ra:

-   nếu searchResults.length > 0 là false thì là No result
-   nếu searchResults.length > 0 là true thì searchResults.map sẽ diễn ra và thành các result con

mỗi lần map đi qua sẽ return Card và kèm theo đó ta truyền result như 1 props xuống cho thằng component Card

Dựa trên interface Card ta thấy kiểu dữ liệu được định nghĩa có id: string và searchResult: CompanySearch. 1 cái là chuỗi và 1 cái được lấy từ interface đã được định nghĩa ở company.ts

Dữ liệu truyền xuống thông qua props được hứng và destructuring ra và gán vào các biến tương ứng.

Sau đó dùng biến đó tham chiếu đến các thuộc tính chẳng hạn searchResult.name (biến searchResult tham chiếu name)

searchResult.symbol tham chiếu đến biến symbol...

CardList.tsx

```js
import "./CardList.css";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    const { searchResults } = props;
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card
                            id={result.symbol}
                            key={uuidv4()}
                            searchResult={result}
                        />
                    );
                })
            ) : (
                <h1>No Result</h1>
            )}
        </>
    );
};

export default CardList;
```

Card.tsx

```js
import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";

// data check, spell check
interface Props {
    id: string;
    searchResult: CompanySearch;
}

const Card: React.FC<Props> = (props: Props): JSX.Element => {
    const { id, searchResult } = props;
    return (
        <div className="card">
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
        </div>
    );
};

export default Card;
```
