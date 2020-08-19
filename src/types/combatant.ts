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

export interface ICombatant {
    id: string;
    name: string;
    type: CombantantTypes;
    conditions: IStatusCondition[];
    hitPoints: ICombatantHitPoints;
    armorClass: number;
    initiative: number;
    initiativeModifier: number;
    monsterUrl?: string;
    characterUrl?: string;
}
