interface Props {
    portfolioValue: string;
}

const CardPortfolio = (props: Props) => {
    const { portfolioValue } = props;
    return (
        <>
            <h4>{portfolioValue}</h4>
            <button>X</button>
        </>
    );
};

export default CardPortfolio;
