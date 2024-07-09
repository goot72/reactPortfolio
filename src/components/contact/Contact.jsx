import React, { useState } from 'react';

const EmailContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'name') {
            setName(value);
        } else if (id === 'message') {
            setMessage(value);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError('Name is required.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else if (!message) {
            setError('Message is required.');
        } else {
            setError('');
            alert('Form submitted successfully!');
            // Here you can handle the form submission, e.g., send the form data to your server
            console.log({ name, email, message });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={fieldStyle}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={fieldStyle}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={fieldStyle}>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={handleChange}
                    style={{ ...inputStyle, height: '100px' }}
                />
            </div>
            {error && <p style={errorStyle}>{error}</p>}
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    );
};

const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
};

const fieldStyle = {
    marginBottom: '10px'
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

const errorStyle = {
    color: 'red',
    marginBottom: '10px'
};

export default EmailContactForm;
