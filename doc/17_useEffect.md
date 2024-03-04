# useEffect

Thường dùng gọi API

```js
useEffect(() => {}, []);
```

```js
useEffect(() => {});
```


```js
export const getCompanyProfile = async (query: string) => {
    try {
        const data = axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.error("Error message from API: ", error);
    }
};
```


Đoạn mã trên là một hàm trong TypeScript sử dụng axios để gửi yêu cầu HTTP và nhận dữ liệu từ một API cung cấp thông tin về các công ty tài chính. Dưới đây là giải thích từng phần của mã:

export const getCompanyProfile = async (query: string) => {:

Đây là khai báo hàm getCompanyProfile. Hàm này được xuất ra ngoài để có thể sử dụng ở nơi khác trong mã nguồn của bạn (export).
try {:

Bắt đầu một khối try, nơi chúng ta đặt mã mà chúng ta muốn thử thực hiện. Nếu có lỗi, chúng ta sẽ xử lý nó trong khối catch.
const data = axios.get<CompanyProfile[]>(...);:

Sử dụng thư viện axios để thực hiện một yêu cầu HTTP GET đến một API tại đường dẫn được tạo ra bằng cách sử dụng template string (${...}). process.env.REACT_APP_API_KEY là một biến môi trường chứa khóa API, giúp xác thực yêu cầu.
<CompanyProfile[]> chỉ định kiểu dữ liệu trả về của yêu cầu. Trong trường hợp này, nó là một mảng các đối tượng CompanyProfile.
return data;:

Trong trường hợp yêu cầu thành công, hàm trả về dữ liệu nhận được từ API.
} catch (error: any) {:

Bắt đầu khối catch để xử lý lỗi. Nếu có bất kỳ lỗi nào xảy ra trong khối try, mã trong khối catch sẽ được thực hiện.
error: any là cách TypeScript xác định kiểu dữ liệu cho biến error. Trong trường hợp này, nó được xác định là bất kỳ kiểu dữ liệu nào (any) để chấp nhận bất kỳ kiểu lỗi nào.
console.error("Error message from API: ", error);:

Nếu có lỗi, thông báo lỗi sẽ được hiển thị trong console thông qua console.error. Nó sẽ hiển thị thông điệp "Error message from API:" kèm theo thông điệp lỗi cụ thể được trả về từ API.
Cuối cùng, đối với hàm này, nếu yêu cầu thành công, nó sẽ trả về dữ liệu từ API, và nếu có lỗi, nó sẽ in ra thông báo lỗi và không trả về gì cả. Hàm này được thiết kế để được sử dụng với await khi được gọi từ một hàm khác.


```jsx
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props {}

const CompanyPage = (props: Props) => {
    // https://localhost:3000/
    let { ticker } = useParams();
    const [company, setCompay] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompay(result?.data[0]);
        };
        getProfileInit();
    }, []);
    return (
        <>
            {company ? (
                <div>{company.companyName}</div>
            ) : (
                <div>Company Not Found</div>
            )}
        </>
    );
};

export default CompanyPage;

```


Đoạn mã này định nghĩa một thành phần React CompanyPage để hiển thị thông tin về một công ty dựa trên ticker (mã chứng khoán) truyền vào từ đường dẫn của URL. Dưới đây là giải thích từng phần của mã:

import các thư viện và file cần thiết:

useEffect, useState: Các hooks của React để quản lý hiệu suất và trạng thái.
useParams: Một hook từ thư viện react-router để trích xuất các tham số từ URL.
CompanyProfile: Một interface (được định nghĩa trong file "company") để mô tả cấu trúc dữ liệu của thông tin công ty.
getCompanyProfile: Một hàm từ file "api" để lấy thông tin công ty từ API.
Khai báo state:

let { ticker } = useParams();: Sử dụng hook useParams để lấy giá trị của tham số ticker từ URL. ticker chứa mã chứng khoán của công ty.

const [company, setCompay] = useState<CompanyProfile>();: Sử dụng hook useState để tạo một state company lưu trữ thông tin về công ty. Ban đầu, nó được đặt là undefined.

Sử dụng useEffect để gọi API khi component được mount:

useEffect(() => {...}, []);: Sử dụng hook useEffect để thực hiện các công việc hiệu suất sau khi component đã render. Truyền mảng rỗng [] làm tham số thứ hai để đảm bảo useEffect chỉ chạy một lần sau khi component được mount.

Trong useEffect, một hàm getProfileInit được định nghĩa để gọi hàm getCompanyProfile từ file "api" để lấy thông tin của công ty dựa trên ticker từ state.

const result = await getCompanyProfile(ticker!);: Gọi hàm getCompanyProfile với ticker truyền vào và đợi kết quả. ticker! sử dụng dấu chấm thanh (!) để khẳng định rằng ticker không phải là null hoặc undefined (điều này được đảm bảo từ hook useParams).

setCompay(result?.data[0]);: Cập nhật state company với dữ liệu đầu tiên từ kết quả trả về (nếu có). result?.data[0] sử dụng toán tử optional chaining để đảm bảo rằng nếu result hoặc result.data không tồn tại, không có lỗi xảy ra.

Hiển thị thông tin công ty:

Trong phần return, sử dụng điều kiện ba ngôi để kiểm tra nếu company tồn tại. Nếu có, hiển thị thông tin của công ty, ngược lại hiển thị thông báo "Company Not Found".
export default CompanyPage:

Xuất CompanyPage để có thể sử dụng nó ở những nơi khác trong ứng dụng React của bạn.