export interface IStatusCondition {
    name: string;
    modifiers: {
        health: number;
        speed: number;
        armorClass: number;
    };
    description: string;
}

export type CombantantTypes = "character" | "hostile" | "ally" | "neutral";

export interface ICombatant {
    id: string;
    name: string;
    type: CombantantTypes;
    conditions: IStatusCondition[];
    hitPoints: {
        max: number;
        remaining: number;
        temporary: number;
    };
    armorClass: number;
}
