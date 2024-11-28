// Display the current date and time
function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').textContent = `Today is ${formattedDate}`;
}
displayDateTime();

// Process user input and display a greeting
function processUserInput() {
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    const favoriteNumberInput = parseFloat(document.getElementById('favoriteNumber').value);

    if (userName && userMood) {
        document.getElementById('greetingMessage').innerHTML = `
            <strong>Reasonable Raccoon Designs welcomes you, ${userName}!</strong><br>
            We're glad you are doing ${userMood}!
        `;
    }

    if (!isNaN(favoriteNumberInput)) {
        const polygonSides = Math.abs(Math.round(favoriteNumberInput));
        const polygonName = getPolygonName(polygonSides);
        alert(`Your favorite number corresponds to: ${polygonName}`);
    }
}

// Determine the polygon name
function getPolygonName(sides) {
    const polygonNames = [
        "monogon", "digon", "trigon", "tetragon", "pentagon",
        "hexagon", "heptagon", "octagon", "nonagon", "decagon"
    ];
    return polygonNames[sides] || `Polygon with ${sides} sides`;
}

// Reasonable Raccoon Features
function randomRaccoonFact() {
    const facts = [
        "Raccoons have highly dexterous front paws that can open jars and doors.",
        "Raccoons are excellent climbers and can scale almost any surface.",
        "A group of raccoons is called a gaze.",
        "Raccoons wash their food in water before eating!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('raccoonOutput').textContent = randomFact;
}

function calculateTrashWeight() {
    const trashWeight = Math.random() * 10 + 1; // Simulates random weight between 1 and 10 lbs
    document.getElementById('raccoonOutput').textContent = `The raccoon collected ${trashWeight.toFixed(2)} lbs of trash today!`;
}

function generateFriendlyInsult() {
    const insults = [
        "You couldn't outwit a dumpster lock!",
        "You're as sneaky as a squirrel on a diet.",
        "You nap more than a raccoon after a trash feast!"
    ];
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    document.getElementById('raccoonOutput').textContent = randomInsult;
}

function raccoonChatter() {
    const noises = ["Squeak!", "Chirrr!", "Growl!", "Purr!"];
    const randomNoise = noises[Math.floor(Math.random() * noises.length)];
    document.getElementById('raccoonOutput').textContent = `The raccoon says: ${randomNoise}`;
}

function raccoonLifeAdvice() {
    const advice = [
        "Always double-check the lock before raiding a dumpster.",
        "Life is better with friends—just like a gaze of raccoons.",
        "Take breaks and enjoy a nap in the sun.",
        "Remember, one raccoon's trash is another's treasure!"
    ];
    const randomAdviceMessage = advice[Math.floor(Math.random() * advice.length)];
    document.getElementById('raccoonOutput').textContent = randomAdviceMessage;
}
