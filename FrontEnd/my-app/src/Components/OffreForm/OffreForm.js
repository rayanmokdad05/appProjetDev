import { useState } from "react";

const OffreForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can handle the form submission logic here
        const newOffer = {title, description, email, telephone};
        
        const response = await fetch('/api/offers', {
            method: 'POST', 
            body: JSON.stringify(newOffer),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // Reset the form fields
            setTitle('');
            setDescription('');
            setEmail('');
            setTelephone('');
            setError(null)
            console.log('new offer added');
        }
        
        
        
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new offer</h3>

            <label>Offer Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Offer Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />  

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Telephone Number:</label>
            <input
                type="tel"
                onChange={(e) => setTelephone(e.target.value)}
                value={telephone}
            />

            <button type="submit">Submit Offer</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default OffreForm;
