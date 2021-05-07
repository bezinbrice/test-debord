const Lign = (props) => {

    return (
        <>
            <h4>Oh Your Bank Account Credit is :</h4>
            {props.amount.map( (num, index) => {
                return <h3 key={index}>Month ({index + 1}) : {num.toFixed(2)} €</h3>
            })}
        </>
    );
}

export default Lign;