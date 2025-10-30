import { Character } from '@/types/character';
import Image from 'next/image';

interface TeamBuilderProps {
  selectedCharacters: Character[];
  onCharacterRemove: (character: Character) => void;
}

export default function TeamBuilder({
  selectedCharacters,
  onCharacterRemove,
}: TeamBuilderProps) {
  const emptySlots = Array(4 - selectedCharacters.length).fill(null);

  return (
    <div className="bg-secondary rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Current Team</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Selected characters */}
        {selectedCharacters.map((character) => (
          <div
            key={character.id}
            className="relative aspect-square bg-primary/50 rounded-lg overflow-hidden border-2 border-accent"
          >
            <Image
              src={character.imageUrl}
              alt={character.name}
              fill
              className="object-cover"
            />
            <button
              onClick={() => onCharacterRemove(character)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <p className="text-white text-sm text-center">{character.name}</p>
            </div>
          </div>
        ))}

        {/* Empty slots */}
        {emptySlots.map((_, index) => (
          <div
            key={`empty-${index}`}
            className="aspect-square bg-primary/30 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center"
          >
            <span className="text-gray-500">Empty Slot</span>
          </div>
        ))}
      </div>

      {/* Team Info */}
      {selectedCharacters.length > 0 && (
        <div className="mt-4 p-4 bg-primary/30 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Team Resonance</h3>
          {/* Add resonance logic here */}
          <p className="text-gray-300">
            Select more characters to see team resonance effects
          </p>
        </div>
      )}
    </div>
  );
}