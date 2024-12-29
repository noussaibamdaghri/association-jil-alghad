import React from 'react';
import NewsList from '../components/NewsList';
import NewsForm from '../components/NewsForm';

function AdminDashboard() {
    return (
        <div>
            <h1>Tableau de Bord - Administration</h1>
            <NewsForm />
            <NewsList />
        </div>
    );
}

export default AdminDashboard;
