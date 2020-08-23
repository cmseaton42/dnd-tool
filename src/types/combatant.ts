export interface IStatusConditionModifiers {
    health: number;
    speed: number;
    armorClass: number;
}

export interface IStatusCondition {
    name: string;
    modifiers: IStatusConditionModifiers;
    description: string;
}

export type CombantantTypes = "character" | "hostile" | "ally" | "neutral";

export interface ICombatantHitPoints {
    max: number;
    remaining: number;
    temporary: number;
}

export interface IDeathSaves {
    success: [boolean, boolean, boolean];
    failure: [boolean, boolean, boolean];
}

export interface ICombatant {
    id: string;
    name: string;
    type: CombantantTypes;
    conditions: IStatusCondition[];
    hitPoints: ICombatantHitPoints;
    armorClass: number;
    initiative: number;
    initiativeModifier: number;
    deathSaves?: IDeathSaves;
    monsterUrl?: string;
    characterUrl?: string;
}

export interface IMonsterDataBasic {
    index: string;
    name: string;
    url: string;
}

export type CreatureSize = "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";

export const ACTION_RECHARGE_ON_ROLL = "recharge on roll";
export const ACTION_PER_DAY = "per day";

export interface IUsageRechargable {
    type: typeof ACTION_RECHARGE_ON_ROLL;
    min_value: number;
}

export interface IUsagePerDay {
    type: typeof ACTION_PER_DAY;
    times: number;
}

export type Usage = IUsagePerDay | IUsageRechargable;

export interface IAction {
    name: string;
    desc: string;
    usage?: Usage;
    spellcasting?: ISpellcasting;
}

export interface ILegendaryAction {
    name: string;
    desc: string;
}

export interface ISpellSlots {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
}

export interface ISpellBasic {
    name: string;
    level: string;
    url: string;
}

export interface ISpellcasting {
    level: number;
    ability: {
        name: "INT" | "CON" | "DEX" | "WIS" | "STR" | "CON";
        url: string;
    };
    dc: number;
    modifier: number;
    school: string;
    slots: ISpellSlots;
    spells: ISpellBasic[];
}

export interface IProficiencyBasic {
    name: string;
    url: string;
    value: number;
}

export interface IConditionBasic {
    name: string;
    url: string;
}

export interface IReaction {
    name: string;
    desc: string;
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
        walk: string;
        fly?: string;
        swim?: string;
        burrow?: string;
        climb?: string;
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
    condition_immunities: IConditionBasic[];
    senses: {
        blindsight?: string;
        truesight?: string;
        darkvision?: string;
        tremorsense?: string;
        passive_perception: number;
    };
    special_abilities: IAction[];
    actions: IAction[];
    legendary_actions: ILegendaryAction[];
    languages: string;
    reactions?: IReaction[];
    challenge_rating: number;
}
