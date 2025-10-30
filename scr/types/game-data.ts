// Common Types
export type ElementType = 'Pyro' | 'Hydro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo' | 'Adaptive';
export type WeaponType = 'Sword' | 'Claymore' | 'Polearm' | 'Catalyst' | 'Bow';
export type ArtifactSlot = 'flower' | 'plume' | 'sands' | 'goblet' | 'circlet';
export type CharacterRole = 'Main DPS' | 'Sub DPS' | 'Support' | 'Shield' | 'Healer';
export type StatType = 'HP' | 'HP%' | 'ATK' | 'ATK%' | 'DEF' | 'DEF%' | 'Elemental Mastery' | 'Energy Recharge' | 
                      'CRIT Rate' | 'CRIT DMG' | 'Physical DMG' | 'Elemental DMG' | 'Healing Bonus';

// Artifact Set Interface
export interface ArtifactSet {
    name: string;
    rarity: number;
    twoPieceBonus: string;
    fourPieceBonus: string;
}

// Weapon Interface
export interface Weapon {
    name: string;
    type: WeaponType;
    rarity: number;
    baseAtk: number;
    substatType: StatType;
    substatValue: number;
    passiveDescription: string;
}

// Character Build Interface
export interface CharacterBuild {
    recommended: {
        weapons: {
            name: string;
            refinement: number;
            priority: number;
            notes?: string;
        }[];
        artifacts: {
            sets: {
                name: string;
                priority: number;
                pieces: number;
            }[];
            stats: {
                sands: StatType[];
                goblet: StatType[];
                circlet: StatType[];
                subStats: StatType[];
            };
        };
        teams: {
            name: string;
            characters: string[];
            notes?: string;
        }[];
    };
    talents: {
        priority: string[];
        normalAttack: {
            name: string;
            description: string;
        };
        elementalSkill: {
            name: string;
            description: string;
            cooldown: number;
        };
        elementalBurst: {
            name: string;
            description: string;
            energyCost: number;
            cooldown: number;
        };
    };
    constellations: {
        [key: number]: {
            name: string;
            description: string;
            priority: number;
        };
    };
}

// Extended Character Interface
export interface DetailedCharacter {
    id: number;
    name: string;
    element: ElementType;
    rarity: number;
    weaponType: WeaponType;
    region: string;
    baseStats: {
        hp: number;
        attack: number;
        defense: number;
        ascensionStat: StatType;
        ascensionValue: number;
    };
    roles: CharacterRole[];
    builds: CharacterBuild;
}