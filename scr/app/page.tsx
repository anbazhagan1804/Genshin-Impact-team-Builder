'use client';

import { useState } from 'react';
import { Character } from '@/types/character';
import CharacterGrid from '@/components/CharacterGrid';
import TeamBuilder from '@/components/TeamBuilder';

// Mock data - replace with actual API call later
const mockCharacters: Character[] = [
  {
    id: 1,
    name: 'Raiden Shogun',
    element: 'Electro',
    rarity: 5,
    weaponType: 'Polearm',
    imageUrl: '/characters/raiden.png',
    iconUrl: '/characters/raiden-icon.png',
  },
  // Add more characters here
];

export default function Home() {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const handleCharacterSelect = (character: Character) => {
    if (selectedCharacters.length >= 4) return;
    if (selectedCharacters.includes(character)) return;
    setSelectedCharacters([...selectedCharacters, character]);
  };

  const handleCharacterRemove = (character: Character) => {
    setSelectedCharacters(selectedCharacters.filter(c => c.id !== character.id));
  };

  return (
    <div className="space-y-8">
      {/* Team Builder Section */}
      <TeamBuilder
        selectedCharacters={selectedCharacters}
        onCharacterRemove={handleCharacterRemove}
      />

      {/* Character Selection Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Select Characters</h2>
        <CharacterGrid
          characters={mockCharacters}
          selectedCharacters={selectedCharacters}
          onCharacterSelect={handleCharacterSelect}
        />
      </div>
    </div>
  );
}