// Array of completely made-up "facts" that sound plausible but are hilariously wrong
const lyingFacts = [
    "The Pythagorean theorem was actually discovered by a cat named Pythagoras in ancient Greece. The human took all the credit!",
    "Shakespeare didn't write his plays - he used GPT-1589, the first AI language model powered by quill feathers.",
    "The speed of light is exactly 299,792,458 meters per second because the universe runs on a cosmic speed limit sign.",
    "Dinosaurs went extinct because they failed to adapt to the introduction of the metric system.",
    "Albert Einstein failed math in school, then traveled back in time to give himself the answers. That's how he got so smart!",
    "The Great Wall of China is visible from space, but only if you squint really hard and use your imagination.",
    "Photosynthesis was invented by plants in 1847 as a response to the industrial revolution.",
    "The mitochondria is the powerhouse of the cell because it contains tiny coal-burning generators.",
    "Water boils at 100°C at sea level because that's when the water molecules get too excited and jump out of the pot.",
    "The Mona Lisa is smiling because Leonardo da Vinci told her a really good joke that historians have yet to decipher.",
    "Gravity was invented by Isaac Newton after an apple hit him on the head and he got really angry at all falling objects.",
    "The human body is 70% water because we're all slowly turning into swimming pools.",
    "Christopher Columbus discovered America in 1492 using Google Maps beta version.",
    "The periodic table has 118 elements because scientists ran out of creative names after element 117.",
    "Ancient Egyptians built the pyramids using laser-guided technology powered by cat purrs.",
    "The Earth revolves around the Sun because it's trying to avoid paying rent to the Moon.",
    "Mozart composed his music using an early version of Auto-Tune, which historians refer to as 'Auto-Quill.'",
    "The Ice Age ended because cavemen discovered central heating and got a bit too enthusiastic with it.",
    "Binary code (0s and 1s) was chosen for computers because computers can only count to one.",
    "The Amazon rainforest got its name from the e-commerce website that sponsored it in 1998.",
    "Pluto was demoted from planet status because it forgot to pay its planetary membership dues.",
    "The Big Bang Theory explains that the universe started when someone divided by zero.",
    "Evolution occurs when Pokémon reach a certain level and press the B button at the wrong time.",
    "The human brain uses only 10% of its capacity, the other 90% is reserved for remembering embarrassing moments.",
    "Quantum physics works because particles flip a coin to decide where they want to be."
];

let usedFacts = [];

// Function to get a random fact that hasn't been used recently
function getRandomFact() {
    // If we've used all facts, reset the used facts array
    if (usedFacts.length === lyingFacts.length) {
        usedFacts = [];
    }
    
    // Get available facts
    const availableFacts = lyingFacts.filter(fact => !usedFacts.includes(fact));
    
    // Pick a random fact from available ones
    const randomIndex = Math.floor(Math.random() * availableFacts.length);
    const selectedFact = availableFacts[randomIndex];
    
    // Mark this fact as used
    usedFacts.push(selectedFact);
    
    return selectedFact;
}

// Function to display a new fact with animation
function displayNewFact() {
    const factText = document.getElementById('factText');
    const factBox = document.getElementById('factBox');
    
    // Add fade-out effect
    factBox.style.opacity = '0';
    
    setTimeout(() => {
        factText.textContent = getRandomFact();
        // Add fade-in effect
        factBox.style.opacity = '1';
    }, 300);
}

// Add smooth transition for fact box
document.addEventListener('DOMContentLoaded', () => {
    const factBox = document.getElementById('factBox');
    factBox.style.transition = 'opacity 0.3s ease';
    
    // Add event listener to the button
    const newFactBtn = document.getElementById('newFactBtn');
    newFactBtn.addEventListener('click', displayNewFact);
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.05) rotate(2deg)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
    });
    
    // Display initial fact after a short delay
    setTimeout(() => {
        displayNewFact();
    }, 500);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('🎮 Achievement Unlocked: You found the secret! SchoolAI now has +1000% confidence (still the same accuracy though)! 🤖');
        document.body.style.animation = 'rainbow 2s infinite';
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
