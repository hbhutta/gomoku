export default function Stone(props: {type: string}) {
    return (
        <div className={`bg-${props.type} rounded-full w-10 h-10`}></div>
    )
}