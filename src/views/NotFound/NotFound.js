import { Link } from 'react-router-dom'
import  '../../styles/components/_inherit.scss';

function NotFound() {
    return (
        <div className="not-found flex column ai-center">
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link className="primary-button" to={'/'}>Go To Sports Icon</Link>
        </div>
    )
}

export default NotFound
