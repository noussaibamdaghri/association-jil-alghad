function registerForEvent(eventName) {
    const registrationUrl = `inscription.html?event=${encodeURIComponent(eventName)}`;
    window.location.href = registrationUrl; // Redirige vers la page d'inscription avec le nom de l'événement
}
