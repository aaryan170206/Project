import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h3 className="text-danger">Page Not Found</h3>

            <p className="text-danger">
                The page you are looking for doesn't exist.
            </p>

            <button
                className="btn btn-info mt-3"
                onClick={() => history.push("/")}
            >
                Back to Login
            </button>
        </div>
    );
};

export default NotFound;