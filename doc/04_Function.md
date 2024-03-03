## Function components

function are objects therefore we can type them
- type the params (we did this already)
- type the ENTIRE functions
- type the return

function là 1 object vì vậy chúng ta có thể kiểu (type) chúng:
- kiểu toàn bộ thông số
- kiểu toàn bộ hàm
- kiểu return

Các ví dụ:

function type nó sẽ là ReactFC<Props> (Kiểu dữ liệu function)

return type kiểu dữ liệu trả về sẽ là JSX element

```jsx
const Card: React.FC<Props> = () : JSX.Element => {
  return (
    <div>
      <h1>Card</h1>
    </div>
  )
}

```
Ví dụ thực tế:

```jsx
const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
      <Card companyName='Apple' ticker='AAPL' price={100}/>
      <Card companyName='Microsoft' ticker='MSFT' price={200}/>
      <Card companyName='Tesla' ticker='TSLA' price={300}/>
    </div>
  )
}

```
