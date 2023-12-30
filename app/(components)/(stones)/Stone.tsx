export default function Stone(props: {type: string}) {
    return (
        <div className={`bg-${props.type} rounded-full w-8 h-8`}></div>
    )
}