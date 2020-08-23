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
}

export interface ILegendaryAction {
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
    condition_immunities: string[];
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
    challenge_rating: number;
}
