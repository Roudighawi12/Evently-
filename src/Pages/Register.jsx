import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Auth.css'

const Register = () => {
    const [state, setState] = useState({fname:"", email:"", password:"", confirm:""});

    const handleChange = (e) =>
    {
        const value = e.target.value;
        const name = e.target.name;
        setState({...state, [name]:value});
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(state.password !== state.confirm)
        {
            alert('Passwords do not match');
            return;
        }
        alert(JSON.stringify(state));
    }

    return (
        <div className='auth-container'>
            <form className='auth-form' onSubmit={handleSubmit}>
                <h1> Register </h1>
                <label htmlFor='fname'> Full Name </label>
                <input id='fname' name='fname' type='text' placeholder='Enter full name...' onChange={handleChange} required />
                <label htmlFor='email'> Email </label>
                <input id='email' name='email' type='email' placeholder='Enter email...' onChange={handleChange} required />
                <label htmlFor='password'> Password </label>
                <input id='password' name='password' type='password' placeholder='Enter password...' onChange={handleChange} required />
                <label htmlFor='confirm'> Confirm Password </label>
                <input id='confirm' name='confirm' type='password' placeholder='Repeat password...' onChange={handleChange} required />
                <button type='submit'> Create account </button>
                <p> Already have an account? <Link to='/Login'> Login </Link> </p>
            </form>
        </div>
    )
}
export default Register;