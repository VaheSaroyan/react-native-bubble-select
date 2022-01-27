/// <reference types="react" />
export interface BubbleNode {
    text: string;
    id: string;
}
export declare type BubbleProps = BubbleNode & {
    color?: string;
    radius?: number;
    marginScale?: number;
    fontName?: string;
    fontSize?: number;
    fontColor?: string;
    fontStyle?: 'bold' | 'bold-italic' | 'normal';
    lineHeight?: number;
    borderColor?: string;
    borderWidth?: number;
    padding?: number;
    selectedScale?: number;
    deselectedScale?: number;
    animationDuration?: number;
    selectedColor?: string;
    selectedFontColor?: string;
    autoSize?: boolean;
    gradient?: {
        startColor: string;
        endColor: string;
        direction: 'horizontal' | 'vertical';
    };
};
declare const Bubble: ({ text, color, radius, marginScale, id, fontName, fontSize, fontColor, lineHeight, fontStyle, padding, borderColor, borderWidth, selectedScale, deselectedScale, selectedColor, animationDuration, selectedFontColor, autoSize, gradient, }: BubbleProps) => JSX.Element;
export default Bubble;
