## State

Chúng ta sẽ tìm hiểu về State

State is everywhere in the development - Trạng thái nó ở bất cứ đâu trong quá trình phát triển - CRUD

Create
Reading
Updating
Deleting


```jsx
    // getter, setter
const [index, setIndex] = useState()
```

useState() provides a getter and setter for you. - useState là nhà cung cấp 1 getter và setter cho bạn

getter = allows you to get data into your page - cho phép bạn lấy dữ liệu từ trang của bạn

setter = allows you to set data so that page render does not destroy data you want. - Cho phép bạn set lại dữ liệu của trang không phá hủy dữ liệu bạn muốn (render lại phần bị thay đổi thôi, các khác giữ nguyên)

interface -> guess the type for you (đoán kiểu dữ liệu cho bạn)

generic -> <>

```jsx
const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const onClick = (e: any) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div>
            <input type="text" value={search} onChange={(e) => onClick(e)} />
        </div>
    );
};

```

Phân tích một chút

Thằng value trong thẻ input nó sử dụng getter của usState để nó lấy search. Mà giá trị ban đầu của search là ""

Thằng onChange là thằng lắng nghe sự kiện. Nó đóng vai trò theo dõi ô input này, mỗi lần có sự thay đổi lập tức onChange này nó sẽ lắng nghe và nó sẽ thực hiện callback khi mà input có thay đổi. gọi tới hàm onClick do mình định nghĩa. (e: cung cấp dữ liệu thực tế ngay tại lúc truyền (e))

Thằng onClick nhận vào e và kiểu e any nhận mọi giá trị, thực hiện setSearch (setter từ useState), lúc này setSearch nó cập nhật lại dữ liệu bằng cách lấy dữ liệu từ e.target.value để cập nhật lại search.

e: là sự kiện

target: là mục tiêu nhắm tới

value: dữ liệu hiện tại
