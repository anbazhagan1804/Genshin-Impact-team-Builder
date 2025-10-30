import Image from 'next/image';
import { Character } from '@/types/character';

interface CharacterGridProps {
  characters: Character[];
  onCharacterSelect?: (character: Character) => void;
  selectedCharacters?: Character[];
}

export default function CharacterGrid({
  characters,
  onCharacterSelect,
  selectedCharacters = [],
}: CharacterGridProps) {
  const elements = [
    'Pyro',
    'Hydro',
    'Anemo',
    'Electro',
    'Dendro',
    'Cryo',
    'Geo',
  ] as const;

  return (
    <div className="space-y-4">
      {/* Element filters */}
      <div className="flex flex-wrap gap-2">
        {elements.map((element) => (
          <button
            key={element}
            className={`px-4 py-2 rounded-lg text-white transition-colors
              ${element === 'Pyro' ? 'bg-red-600 hover:bg-red-700' :
                element === 'Hydro' ? 'bg-blue-600 hover:bg-blue-700' :
                element === 'Anemo' ? 'bg-teal-600 hover:bg-teal-700' :
                element === 'Electro' ? 'bg-purple-600 hover:bg-purple-700' :
                element === 'Dendro' ? 'bg-green-600 hover:bg-green-700' :
                element === 'Cryo' ? 'bg-cyan-600 hover:bg-cyan-700' :
                'bg-yellow-600 hover:bg-yellow-700'
              }`}
          >
            {element}
          </button>
        ))}
      </div>

      {/* Character grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {characters.map((character) => (
          <button
            key={character.id}
            onClick={() => onCharacterSelect?.(character)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all
              ${selectedCharacters.includes(character) 
                ? 'border-accent scale-95' 
                : 'border-transparent hover:border-accent/50 hover:scale-105'
              }`}
          >
            <Image
              src={character.imageUrl}
              alt={character.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <p className="text-white text-sm text-center">
                {character.name}
              </p>
            </div>
            {/* Rarity stars */}
            <div className="absolute top-1 right-1 flex">
              {Array.from({ length: character.rarity }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            {/* Element icon */}
            <div className="absolute top-1 left-1 w-6 h-6">
              <Image
                src={`/elements/${character.element.toLowerCase()}.png`}
                alt={character.element}
                fill
                className="object-contain"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}