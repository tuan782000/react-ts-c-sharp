# Router

Muốn xem chi tiết 1 thông tin của mã cổ phiếu truy cập chi tiết. React router sẽ hỗ trợ làm việc đó

https://finshark.com/company/AAPL

install

npm install -save react-router
npm install -save react-router-dom

npm install --save @types/react-router-dom
npm install --save @types/react-router


index.ts

```jsx
    <RouterProvider router={router} />
```

Cấu hình Router

```jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "company/:ticker",
                element: <CompanyPage />,
            },
        ],
    },
]);

```

path: là đường dẫn

element: Component mà đường dẫn đó sẽ đưa tới

Children: Con - nó sẽ là mãng chứa danh sách các đối tượng

Ở App.ts

```jsx
import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;

```

sử dụng Outlet được lấy từ thư viện react-router-dom

Các thành phần thẻ a sẽ được Chuyển thành thẻ Link và cho và sử dụng to để chứa đường dẫn

```js
<Link to="/">
{/* Hoặc nếu có js phải như sau */}
<Link to={`/company/${abc}`}>

```