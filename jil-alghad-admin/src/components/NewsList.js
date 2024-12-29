import React, { useEffect, useState } from 'react';
import { getNews, deleteNews } from '../services/newsService';

function NewsList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await getNews();
            setNews(response.data);
        } catch (error) {
            console.error('Erreur de récupération des actualités', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteNews(id);
            fetchNews(); // Rafraîchir la liste
        } catch (error) {
            console.error('Erreur de suppression', error);
        }
    };

    return (
        <div>
            <h2>Liste des Actualités</h2>
            <ul>
                {news.map((item) => (
                    <li key={item._id}>
                        {item.title} - {item.content}
                        <button onClick={() => handleDelete(item._id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsList;
