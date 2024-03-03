## Data Flow

Đổi luồng chút

App.tsx

```jsx
import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
    const [search, setSearch] = useState < string > "";
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };
    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    };
    return (
        <div className="App">
            <Search
                onClick={onClick}
                search={search}
                handleChange={handleChange}
            />
            <CardList />
        </div>
    );
}

export default App;
```

Chuyển hết các thực hiện tính năng get set của useState với hàm handleChange và onClick sang app, Sau đó thực truyền nó 1 props từ cha sang con. thông qua component Search

Bên Search sẽ hứng các props đó

Search.tsx

```js
import React, { ChangeEvent, SyntheticEvent } from "react";
import "./Search.css";

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const { onClick, search, handleChange } = props;
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => handleChange(e)}
            />
            <button onClick={(e) => onClick(e)}>Submit</button>
        </div>
    );
};

export default Search;
```

Muốn hứng các props. Trước tiên phải khai báo interface để định nghĩa cho các kiểu dữ liệu mà mình sẽ hứng

```txt
onClick: (e: SyntheticEvent) => void; // kiểu sư kiện
search: string | undefined; // kiểu dữ liệu chuỗi
handleChange: (e: ChangeEvent<HTMLInputElement>) => void; // kiểu function
```

Thằng component Search sẽ phải nhận props. và sau đó việc chúng sử dụng cú pháp destructuring để trải phẳng mảng ra gán từng cái biến tương ứng ở trong props. sau đó dùng lại ở trong TSX. sau này ko cần phải props.search hay props.onClick,...
