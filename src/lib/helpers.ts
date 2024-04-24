import * as sv from 'spanish-verbs';

export const personsList = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];

export const tenseNames = sv.validTenses;

export function formatName(name: string) {
    return name.replaceAll('_', ' ');
}

function uprightConjunctions(verb: string) {
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

function reverseConjunctions(verb: string) {
    let conjunctions = {};	
    for (let i = 0; i <= 5; i++) {
        let tense = {}
        sv.validTenses.forEach(t => {
                tense[t] = sv.getConjugation(verb, t, i);
        })
        conjunctions[personsList[i]] = tense;
    }
    return conjunctions;					
}

export function conjunctions(verb: string, position: boolean) {
   const conj =  position ? uprightConjunctions(verb) : reverseConjunctions(verb) ;
   return conj;
}