function filtrerProdukt(erDiabetesvennlig, filterAktivt) {
    return filterAktivt && !erDiabetesvennlig ? 'skjul' : 'vis';
}

// === Tester ===
console.assert(filtrerProdukt(true, true) === 'vis', 'Test 1 feilet: Skal vises');
console.assert(filtrerProdukt(false, true) === 'skjul', 'Test 2 feilet: Skal skjules');
console.assert(filtrerProdukt(false, false) === 'vis', 'Test 3 feilet: Filter ikke aktivt');
console.assert(filtrerProdukt(true, false) === 'vis', 'Test 4 feilet: Filter ikke aktivt');

console.log("✅ Alle tester passerte");
