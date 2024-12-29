import React, { useState } from 'react';
import { createNews } from '../services/newsService';

function NewsForm() {
    const [formData, setFormData] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createNews(formData);
            alert('Actualité ajoutée');
            setFormData({ title: '', content: '' });
        } catch (error) {
            console.error('Erreur lors de l\'ajout', error);
        }
    };

    return (
        <div>
            <h2>Ajouter une Actualité</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Titre"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Contenu"
                    value={formData.content}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default NewsForm;
