import * as sv from 'spanish-verbs';

export const personsList = {
    0: 'yo',
    1: 'tú',
    2: 'él',
    3: 'nosotros',
    4: 'vosotros',
    5: 'ellos'
} 

export function tenseName(tense: string) {
    return tense.replaceAll('_', ' ');
}

export function conjunctions(verb: string) {
    let conjunctions = {};	
    sv.validTenses.forEach(tense => {
        let persons = {}
        for (let i = 0; i <= 5; i++) {
            persons[i] = sv.getConjugation(verb, tense, i);
        }
        conjunctions[tense] = persons;
    })
    return conjunctions;					
}