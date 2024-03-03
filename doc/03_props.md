## Tìm hiểu về Props

```jsx
// App.tsx

import './App.css';
import CardList from './Components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;

```

Sẽ sử dụng components CartList đưa vào trong App

```jsx
// CartList.tsx

import './CardList.css'
import Card from '../Card/Card'

interface Props {

}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName='Apple' ticker='AAPL' price={100}/>
      <Card companyName='Microsoft' ticker='MSFT' price={200}/>
      <Card companyName='Tesla' ticker='TSLA' price={300}/>
    </div>
  )
}

export default CardList

```

Hiện tại ở App thì CardList chưa có giá trị phải truyền nên interface kia hiện tại chưa có

Bên trong CardList tôi sẽ sử dụng các component Card

```jsx
// Card.tsx

import React from "react";
import "./Card.css";

// data check, spell check
interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = (props: Props) => {
    const { companyName, ticker, price } = props;
    return (
        <div className="card">
            <img
                src="https://images.unsplash.com/photo-1671920090611-9a40303b52cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="pic"
            />
            <div className="details">
                <h2>
                    {companyName} ({ticker})
                </h2>
                <p>$ {price}</p>
            </div>
            <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                numquam?
            </p>
        </div>
    );
};

export default Card;

```

Như bạn có thể thấy ở bên CardList có truyền xuống 1 props, chú ý nội dung truyền xuống phải đảm bảo phù hợp với thằng được nhận. 

Cụ thể ở CardList tôi truyền xuống 3 thằng companyName ticker và price. Bên card tôi có định nghĩa Props cũng 3 value tương ứng. sau đó truyền thẳng vào trong component Card.

Để tiện hơn khi sử dụng các các props. thì tôi đã sử dụng cú pháp destructuring để trải rộng các phần truyền xuống được gán vào biến sẵn. Nội dung chỉ cần gọi đúng tên biến dữ liệu sẽ được đặt ngay đó.
