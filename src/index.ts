import adjectives from "./assets/adjectivelist.json";
import nouns from "./assets/nounlist.json";

/**
 * Generates a random number from 0 to max.
 * @param {number} max Max integer
 * @return {number} Random integer 0-max
 */
function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

/**
 * Capitalizes the first letter of the string.
 * @param {string} val Input string
 * @return {string} String with first letter capitalized
 */
function capitalizeFirst(val: string): string {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

/**
 * Generates a random username from a list of 4800 adjectives and 6800 nouns.
 * @return {string} Random username.
 */
export default function(): string {
    const nAdj = adjectives.total;
    const nNouns = nouns.total;

    const adj = capitalizeFirst(adjectives.adjectives[randomInt(nAdj)]);
    const noun = capitalizeFirst(nouns.nouns[randomInt(nNouns)]);

    return `${adj}${noun}`;
}
