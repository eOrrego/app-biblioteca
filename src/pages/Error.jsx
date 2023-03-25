import { useRouteError, Link } from 'react-router-dom'

const Error = () => {

    const error = useRouteError()

    return (
        <div>
            Error: {error.status} {error.statusText}
            <Link to="/">Volver al Home</Link>
        </div>
    )
}

export default Error