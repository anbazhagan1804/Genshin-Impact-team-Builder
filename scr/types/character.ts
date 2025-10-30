export interface Character {
  id: number;
  name: string;
  element: 'Pyro' | 'Hydro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo';
  rarity: 4 | 5;
  weaponType: 'Sword' | 'Claymore' | 'Polearm' | 'Catalyst' | 'Bow';
  imageUrl: string;
  iconUrl: string;
}

export interface CharacterBuild {
  id: string;
  characterId: number;
  level: number;
  constellation: number;
  talents: {
    normal: number;
    skill: number;
    burst: number;
  };
  artifacts: {
    flower?: string;
    plume?: string;
    sands?: string;
    goblet?: string;
    circlet?: string;
  };
  weapon: {
    id: string;
    name: string;
    level: number;
    refinement: number;
  };
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  characters: CharacterBuild[];
  createdAt: Date;
  updatedAt: Date;
}