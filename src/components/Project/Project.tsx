interface Props {
    image: string;
    name: string;
    summary: string;
}

export default function Project(props: Props) {
    const {image, name, summary} = props;
    return (
        <div>
            <img src={image} />
            <h5>{name}</h5>
            <p>{summary}</p>
        </div>
    )
}