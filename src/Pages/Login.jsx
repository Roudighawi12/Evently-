import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Auth.css'

const Login = () => {
    const [state, setState] = useState({email:"", password:""});

    const handleChange = (e) =>
    {
        const value = e.target.value;
        const name = e.target.name;
        setState({...state, [name]:value});
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        alert(JSON.stringify(state));
    }

    return (
        <div className='auth-container'>
            <form className='auth-form' onSubmit={handleSubmit}>
                <h1> Login </h1>
                <label htmlFor='email'> Email </label>
                <input id='email' name='email' type='email' placeholder='Enter email...' onChange={handleChange} required />
                <label htmlFor='password'> Password </label>
                <input id='password' name='password' type='password' placeholder='Enter password...' onChange={handleChange} required />
                <button type='submit'> Login </button>
                <p> No account yet? <Link to='/Register'> Register </Link> </p>
            </form>
        </div>
    )
}
export default Login;