/*  un componente deve essere chiamato con la prima lettera maiuscola FormGroup.jsx */

const FormGroup = (props) => {
    /* ogni coponente deve ritornare un singolo elemento div padre, con all'interno tutta la roba che vuoi  */
    return (
        <>
            <div> esempio di form </div>
            <h2>cavoletti di bruxelles </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis temporibus porro dignissimos
                deleniti provident quaerat similique ipsum, voluptatem corporis eaque, itaque accusamus voluptatum iusto
                eos ab dolor asperiores incidunt?
            </p>

            <>
                {/* importa un fragment se ti serve di avere un parent intorno a degli elementi  */}
                <label htmlFor={props.id}> {props.content}</label>
                <input type="text" id={props.id} placeholder={props.placeholder} />
            </>
        </>
    );
};

/* il componente deve anche essere esportato per renderlo accessibile al mondo  */
export default FormGroup;
