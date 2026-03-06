/**
 * Date mock pentru sală: abonamente, tipuri, add-ons.
 */
window.ABONAMENTE_MOCK = [
  { id: 'starter', nume: 'Starter', tip: 'sala', durata: '1-luna', buget: 'accesibil', pret: 129, descriere: 'Acces nelimitat la sală. Ideal pentru începători care vor să-și formeze obiceiul.', imagine: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=90' },
  { id: 'full-access', nume: 'Full Access', tip: 'full', durata: '1-luna', buget: 'standard', pret: 189, descriere: 'Sală + toate clasele de grup. Transformă-ți antrenamentul în ritual.', imagine: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=90' },
  { id: 'clase-only', nume: 'Doar Clase', tip: 'clase', durata: '1-luna', buget: 'accesibil', pret: 149, descriere: 'Yoga, HIIT, cycling, funcțional. Energizează-te în grup.', imagine: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=90' },
  { id: 'quarter', nume: 'Quarter', tip: 'full', durata: '3-luni', buget: 'standard', pret: 469, descriere: '3 luni full access. Economisești și îți menții momentum-ul.', imagine: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=90' },
  { id: 'annual', nume: 'Anual Premium', tip: 'full', durata: '12-luni', buget: 'premium', pret: 1499, descriere: 'Un an de transformare. Cel mai avantajos preț și prioritate la rezervări.', imagine: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=90' },
  { id: 'sala-3luni', nume: 'Sala 3 luni', tip: 'sala', durata: '3-luni', buget: 'accesibil', pret: 329, descriere: 'Doar sală, 3 luni. Pentru cei care preferă antrenamentul liber.', imagine: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=90' },
  { id: 'nocturn', nume: 'Nocturn', tip: 'sala', durata: '1-luna', buget: 'accesibil', pret: 99, descriere: 'Acces 18:00–23:00. Perfect dacă lucrezi până târziu.', imagine: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=90' },
  { id: 'duo', nume: 'Duo', tip: 'full', durata: '1-luna', buget: 'standard', pret: 329, descriere: 'Două persoane, un abonament. Veniți împreună, reușiți împreună.', imagine: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=90' },
  { id: 'student', nume: 'Student', tip: 'full', durata: '1-luna', buget: 'accesibil', pret: 139, descriere: 'Reducere pentru studenți. Arată carnetul și antrenează-te cu preț mic.', imagine: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=90' },
];

window.CLASE_MOCK = [
  { id: 'hiit-luni', nume: 'HIIT', zi: 'Luni', ora: '18:00', durata: '45 min', tip: 'cardio', descriere: 'Intervale de intensitate mare. Arzi calorii și îți îmbunătățești condiția.' },
  { id: 'yoga-marti', nume: 'Yoga', zi: 'Marți', ora: '07:00', durata: '60 min', tip: 'flexibilitate', descriere: 'Începe ziua cu respirație și mișcare. Pentru minte și corp.' },
  { id: 'cycling-marti', nume: 'Cycling', zi: 'Marți', ora: '19:00', durata: '45 min', tip: 'cardio', descriere: 'Clasă de cycling indoor. Ritm, muzică, transpirație.' },
  { id: 'functional-miercuri', nume: 'Funcțional', zi: 'Miercuri', ora: '18:30', durata: '50 min', tip: 'forță', descriere: 'Mișcări compound, kettlebell, rezistență. Pentru forță utilă.' },
  { id: 'pilates-miercuri', nume: 'Pilates', zi: 'Miercuri', ora: '10:00', durata: '55 min', tip: 'flexibilitate', descriere: 'Core, control, elongare. Ideal pentru recuperare și postură.' },
  { id: 'boxing-joi', nume: 'Boxing', zi: 'Joi', ora: '19:00', durata: '50 min', tip: 'cardio', descriere: 'Pumni, picioare, sac. Eliberează energia și antrenează reflexele.' },
  { id: 'strength-joi', nume: 'Strength', zi: 'Joi', ora: '07:30', durata: '45 min', tip: 'forță', descriere: 'Grezle și bare. Construiește mușchi și metabolism.' },
  { id: 'stretching-vineri', nume: 'Stretching', zi: 'Vineri', ora: '18:00', durata: '40 min', tip: 'flexibilitate', descriere: 'Recuperare activă și mobilitate. Pregătește-te pentru weekend.' },
  { id: 'hiit-sambata', nume: 'HIIT Weekend', zi: 'Sâmbătă', ora: '10:00', durata: '45 min', tip: 'cardio', descriere: 'Sesiune intensă de weekend. Pornește sâmbăta cu energie.' },
];

window.ADDONS_GYM_MOCK = [
  { id: 'antrenor', nume: 'Antrenor personal (1 ședință)', pret: 120 },
  { id: 'pachet-antrenor', nume: 'Pachet 5 ședințe antrenor', pret: 500 },
  { id: 'masaj', nume: 'Masaj sportiv (50 min)', pret: 150 },
  { id: 'nutritie', nume: 'Consult nutriție (1 sesiune)', pret: 80 },
];
