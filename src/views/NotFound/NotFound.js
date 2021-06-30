import { Link } from 'react-router-dom'
import '../../styles/components/_inherit.scss';
import { useHistory } from "react-router-dom";

function NotFound() {
    const history = useHistory();
    const onHome = () => {
        history.push("/");
    }
    return (
        <div className="not-found flex column ai-center">
            <h2>404</h2>
            <p>Page Not Found</p>
            <div className='buttonWrapper'>
                <button onClick={onHome}>Go to Sports Icon</button>
            </div>
        </div>
    )
}

export default NotFound
