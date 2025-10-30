
import { DetailedCharacter } from '../types/game-data';

export async function loadCharacterData(characterName: string): Promise<DetailedCharacter | null> {
    try {
        const response = await fetch(`./data/characters/${characterName.toLowerCase().replace(/\s+/g, '-')}.json`);
        if (!response.ok) {
            console.error(`Failed to load data for character: ${characterName}`);
            return null;
        }
        const data = await response.json();
        return data as DetailedCharacter;
    } catch (error) {
        console.error(`Error loading character data: ${error}`);
        return null;
    }
}

export async function loadAllCharacters(): Promise<DetailedCharacter[]> {
    try {
        const response = await fetch('/data/character-list.json');
        const characterNames = await response.json();

        const characters = await Promise.all(
            characterNames.map(async (name: string) => {
                const detailedData = await loadCharacterData(name);
                return detailedData;
            })
        );

        return characters.filter((character): character is DetailedCharacter => character !== null);
    } catch (error) {
        console.error('Error loading character list:', error);
        return [];
    }
}
