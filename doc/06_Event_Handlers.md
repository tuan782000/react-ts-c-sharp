
## Event Handlers

Tìm hiểu về sự kiện

Nói qua lại sự kiện trong JS

```js
let button = document.querySelector(".myClass");

// kêt nối sự kiệu

button.addEventListener("onChange", myFunc) // lắng nghe sự kiện khi thay đổi gọi tới myFunc
// or
button.addEventListener("click", myFunc) // thêm sự kiện khi nhấn vào gọi tới myFunc
```

Quay trở lại React

cung cấp cho ta các sự kiện sẵn và tích hợp

onChange: lắng nghe thay đổi

onClick: lắng nghe khi nhấn nút từ bàn phím,...

```js
<input onChange={code()}/>
<input onClick={}/>
```

Kiểu dữ liệu any: chấp nhận mọi kiểu dữ liệu khác nhau, biến TS thành JS

Để mà muốn biết truyền cho e sự kiện gì thì phải hover vào nơi truyền e để lấy type sẽ truyền

Ví dụ:

```js

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

<input
    type="text"
    value={search}
    onChange={(e) => handleChange(e)}
/>
```

Ta hover vào e trong input ngay lúc onChange truyền đi "e" nó sẽ hiện 
```js
ChangeEvent<HTMLInputElement>
```
Chúng ta chỉ cần copy và bỏ nó vào hàm handleChange ở trên

```js
const onClick = (e:SyntheticEvent) => {
  console.log(e)
}
<button onClick={(e) => onClick(e)}></button>
```

SyntheticEvent: là 1 cái tổng hợp tất cả các kiểu sự kiện  (chỉ khi nào các sự kiện khác mà ko gợi ý thì gõ cái này)
