// Tablica z "Kocham Cię" w różnych językach
const loveInLanguages = [
    'Kocham Cię', // polski
    'I love you', // angielski
    "Je t'aime", // francuski
    'Ti amo', // włoski
    'Te amo', // hiszpański
    'Ich liebe dich', // niemiecki
    'Я тебя люблю', // rosyjski
    '我爱你', // chiński
    '愛してる', // japoński
    '사랑해', // koreański
    'Szeretlek', // węgierski
    "Σ'αγαπώ", // grecki
    'Jag älskar dig', // szwedzki
    'Eu te amo', // portugalski
    'Seni seviyorum', // turecki
];

// Różne czcionki
const fonts = [
    'Arial',
    'Verdana',
    'Georgia',
    'Tahoma',
    'Courier New',
    'Times New Roman',
    'Impact',
    'Comic Sans MS',
    'Trebuchet MS',
];

// Symbole kwiatków
const flowers = ['🌸', '🌺', '🌹', '🌷', '🌻', '🌼', '💐', '🪷', '🏵️'];

// Symbole serduszek
const hearts = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💝', '💟'];

const cats = ['🐱', '😺', '😸', '😹', '😻', '😼', '🙀', '😿', '😾'];

// Funkcja do tworzenia losowej pozycji w przeglądarce
function randomPosition() {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
    };
}

// Funkcja do tworzenia losowej wielkości
function randomSize() {
    return Math.floor(Math.random() * 30) + 16 + 'px';
}

// Funkcja do tworzenia losowego czasu animacji
function randomAnimationDuration() {
    return Math.floor(Math.random() * 20) + 10 + 's';
}

// Funkcja do tworzenia losowego opóźnienia animacji
function randomAnimationDelay() {
    return 0 + 's';
}

// Funkcja tworząca pływające elementy
function createFloatingElement(content, className) {
    const element = document.createElement('div');
    element.innerHTML = content;
    element.className = 'floating-element ' + className;

    const position = randomPosition();
    element.style.left = position.x + 'px';
    element.style.top = position.y + 'px';
    element.style.fontSize = randomSize();
    element.style.animationDuration = randomAnimationDuration();
    element.style.animationDelay = randomAnimationDelay();

    if (className === 'number') {
        element.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    }

    document.body.appendChild(element);
}

// Utworzenie 30 latających elementów liczby 63
for (let i = 0; i < 40; i++) {
    createFloatingElement('63!', 'number');
}

// Utworzenie 20 latających serduszek
for (let i = 0; i < 50; i++) {
    const heart = hearts[Math.floor(Math.random() * hearts.length)];
    createFloatingElement(heart, 'heart');
}

// Utworzenie 20 latających kwiatków
for (let i = 0; i < 50; i++) {
    const flower = flowers[Math.floor(Math.random() * flowers.length)];
    createFloatingElement(flower, 'flower');
}

// Utworzenie 20 latających kwiatków
for (let i = 0; i < 50; i++) {
    const cat = cats[Math.floor(Math.random() * cats.length)];
    createFloatingElement(cat, 'cat');
}

// Utworzenie 15 latających fraz "Kocham Cię" w różnych językach
for (let i = 0; i < 20; i++) {
    const lovePhrase =
        loveInLanguages[Math.floor(Math.random() * loveInLanguages.length)];
    createFloatingElement(lovePhrase, 'love-phrase');
}

// Dostosowanie pozycji elementów przy zmianie rozmiaru okna
window.addEventListener('resize', function () {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach(function (element) {
        const position = randomPosition();
        element.style.left = position.x + 'px';
        element.style.top = position.y + 'px';
    });
});