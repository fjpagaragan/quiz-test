

export interface Question {
    category: string;
    question: string;
    choices: string[];
    answer: string;
    label: string;
}

export type Answer = Record<string, string>;

export type Score = {
    raw: number,
    percentage: string,
    label: string,
}

export enum ScoreLabel {
    HIGH = "High",
    AVERAGE = "Average",
    LOW = "Low"
}