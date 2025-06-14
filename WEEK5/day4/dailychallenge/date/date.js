

function getTimeUntilNewYear() {
   
    const now = new Date();

  
    const newYear = new Date(now.getFullYear() + 1, 0, 1); 


    const diffMilliseconds = newYear.getTime() - now.getTime();

    
    if (diffMilliseconds < 0) {
        return "Le 1er janvier est déjà passé cette année !"; 
    }

   
    const seconds = Math.floor(diffMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Calculer le reste pour chaque unité
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    // 5. Formater le résultat
    return `Le 1er janvier est dans ${days} jours et ${remainingHours}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')} heures.`;
}

// Exporter la fonction pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = getTimeUntilNewYear;