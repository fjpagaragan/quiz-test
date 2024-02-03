

export interface Question {
    category: string;
    question: string;
    choices: string[];
    answer: string;
    label: string;
}

export interface Course {
    title: string;
    description: string[];
    access: string;
    price: string;
    image: string;
    link: string;
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