export default function randomCity(): {
    id: string;
    text: string;
    color: string;
    selectedColor: string;
    selectedScale: number;
} | {
    id: string;
    text: string;
    color?: undefined;
    selectedColor?: undefined;
    selectedScale?: undefined;
} | undefined;
export declare function randomCities(): ({
    id: string;
    text: string;
    color: string;
    selectedColor: string;
    selectedScale: number;
} | {
    id: string;
    text: string;
    color?: undefined;
    selectedColor?: undefined;
    selectedScale?: undefined;
} | undefined)[];
