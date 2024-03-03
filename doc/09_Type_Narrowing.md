## Tìm hiểu về Type Narrowing

```jsx
const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

let result = await searchCompanies(search);

setSearchResult(result.data);

```

Vào thực tế

```jsx
const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
const [serverError, setServerError] = useState<string>("");


const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
        if(typeof result === 'string'){
            setServerError(result);
        } else if(result && Array.isArray(result.data)) {
            setSearchResult(result.data)
        }
        console.log(searchResult);
    };
```

Khi người dùng click vào search, 1 sự kiện Search đã được gửi đi "vì click này tương tác với API nên có Async Await"

e được truyền vào làm đối số.

SyntheticEvent là một kiểu dữ liệu trong TypeScript được sử dụng để đại diện cho mọi loại sự kiện (event) trong React.
