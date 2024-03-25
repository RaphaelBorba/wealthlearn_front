
interface IProps {
    message: string;
}

export default function ErrorText({ message }: IProps) {

    return (
        <div className="wrapper mt-36">
            <h1 className="text-center text-muted text-2xl md:text-4xl">{message}</h1>
        </div>
    )
}