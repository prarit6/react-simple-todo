export default function ButtonClick({name,action,design}){
    return (
        <>
            <button onClick={action} className={design}>{name}</button>
        </>
    )
}
