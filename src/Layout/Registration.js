import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Assume successful registration response
        const response = await fetch('/api/register', { ... });
        if (response.ok) {
            navigate('/Home');  // Redirect to the Home page after registration
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Your form fields here */}
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;
