
type resourceProps = {
    name: string,
    amount: number,
    onchange:(increment:number)=>void
}
const Resource = (props: resourceProps) => {
    return (
        <div className="Resource">
            <p>{props.name}: <span>{props.name}</span></p>
            <div className="buttonContainer">
                <button onClick={()=>props.onchange(-1)}>-</button>
                <button onClick={()=>props.onchange(+1)}>+</button>
            </div>
        </div>
    )
}
export default Resource