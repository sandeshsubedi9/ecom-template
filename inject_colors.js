const fs = require('fs');
const htmlFile = 'theme2_maroon sano-rahul.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// Pastel colors to rotate through
const colors = ['#E2EFF0', '#F8E5D6', '#F8DDE1', '#EAE6F4', '#F4EBE1', '#EBF4E5', '#FCE8ED', '#DDF0F5'];
let colorIndex = 0;
let matches = 0;

// Replace bg-white in card-like elements (e.g. rounded-2xl or rounded-3xl with padding)
// Look for class="... bg-white ... p-6 or p-8 ... rounded-2xl or 3xl ..."
// Or maybe just anything with bg-white and rounded-2xl/rounded-3xl
content = content.replace(/class="([^"]*bg-white[^"]*rounded-[23]xl[^"]*)"/g, (match, classes) => {
    matches++;
    let newClasses = classes.replace('bg-white', '').replace(/\s+/g, ' ').trim();
    let color = colors[colorIndex % colors.length];
    colorIndex++;
    return `class="${newClasses}" style="background-color: ${color};"`;
});

// Also in the pricing bundle, change the 3 cards.
// Single: #F4EBE1
// Family Pack: var(--primary) (Wait, leave the Most Popular one as primary, or maybe change it? The user said "card have this alternative low shades". The family pack has var(--primary). The Fleet has #E2F0E5.) Let's just do the bg-white cards first.

console.log('Replaced ' + matches + ' white cards with pastel colors.');
fs.writeFileSync(htmlFile, content, 'utf8');
