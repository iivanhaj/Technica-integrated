import p1 from '../src/imageForWebsite/comets/comet1.png';
import p2 from '../src/imageForWebsite/comets/comet2.png';
import p3 from '../src/imageForWebsite/comets/comet3.png';
import p4 from '../src/imageForWebsite/comets/comet4.png';

const comets = [p1, p2, p3, p4];


const getRandomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };
  
  // Create and position comets
  for (let i = 0; i < numberOfComets; i++) {
    const comet = document.createElement('img');
    comet.setAttribute('src', comets[i]); // Using the imported array directly
    comet.classList.add('comet');
  
    const { x, y } = getRandomPosition();
    comet.style.position = 'absolute';
    comet.style.left = `${x}px`;
    comet.style.top = `${y}px`;
  
    document.body.appendChild(comet);
  }