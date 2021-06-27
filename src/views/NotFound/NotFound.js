import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div >
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link className="primary-button" to={'/'}>Go To Sports Icon</Link>
        </div>
    )
}

export default NotFound
