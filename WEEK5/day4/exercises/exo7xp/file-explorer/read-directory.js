
import fs from 'fs';

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier :', err);
    return;
  }

  console.log('📁 Liste des fichiers dans le répertoire :');
  files.forEach(file => {
    console.log('📄', file);
  });
});
