
import fs from 'fs';

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture :', err);
    return;
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture :', err);
      return;
    }

    console.log('✅ Contenu copié dans destination.txt');
  });
});
