export interface IMonsterDataBasic {
    index: string;
    name: string;
    url: string;
}

export type CreatureSize = "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";

export interface IProficiencyBasic {
    name: string;
    url: string;
    value: number;
}

export interface IMonsterData extends IMonsterDataBasic {
    size: CreatureSize;
    type: string;
    subtype: null | string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: {
        walk?: string;
        fly?: string;
        swim?: string;
        crawl?: string;
        // What else can be here
    };
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    proficiencies: IProficiencyBasic[];
    damage_vulnerabilities: string[];
    damage_resistances: string[];
    damage_immunities: string[];
    senses: {
        darkvision?: string;
        // What else can be here
    };
}
