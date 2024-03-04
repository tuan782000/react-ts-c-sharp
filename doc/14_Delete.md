Chủ yếu xóa mình sẽ dùng hàm filter để mình lọc ra được thành 1 mảng mới là loại bỏ đi thằng không đủ điều kiện tham gia cái mảng đó.

App.ts

```js

    const onPorfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        });

        setPortfolioValues(removed);
    };

```