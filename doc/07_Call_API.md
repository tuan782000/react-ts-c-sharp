## Call API

Financial Modeling API (bên thứ 3 cung cấp).

npm install axios --save
npm install --save-dev @types/axios

npm install dotenv --save

Cài xong nhớ khởi chạy lại

Create separate API file

Create global type file

Tạo file .env

```txt
REACT_APP_API_KEY=1685cb4c2492beb620a6bd2bf60947c4
```

Đoạn này chứa API key

Bổ sung file:

company.d.ts file này dùng để khai báo kiểu dữ liệu

CompanySearch, CompanyProfile, CompanyKeyRatios,... xong dùng export xuất ra, sau này các file khác có thể dùng. Chẳng hạn api.tsx có CompanySearch và cần dùng kiểu của nó

api.tsx

```js
import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data =
            (await axios.get) <
            SearchResponse >
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`;
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
};
```

Cắt nghĩa:

```js
interface SearchResponse {
    data: CompanySearch[];
}
// Cái này định nghĩa SearchResponse và kiểu data là CompanySearch mảng

// await axios.get<SearchResponse> chứng tảo 1 điều rằng khi lấy dữ liệu kiểu dữ liệu chấp nhận là SearchResponse
```

Nguyên đoạn code trên gọi thực hiện try catch để thực hiện call api 3 trạng thái pending, resolve gọi thành công, reject gọi thất bại

cái kết quả sau khi gọi được lưu vào data, trong quá trình gọi đó nếu bị reject thù catch nó sẽ bắt lỗi và ném ra message thông báo lỗi. Còn nếu thành công có dữ liệu được lưu vào data và return data đó cho người dùng.

Cái hàm searchCompanies nó nhận vào 1 tham số query và kiểu dữ liệu là string, phục vụ truyền cái người dùng nhập vào đây

process.env.REACT_APP_API_KEY giúp lấy key từ file .env ra mà dùng. tránh để lộ các thông tin quan trọng
