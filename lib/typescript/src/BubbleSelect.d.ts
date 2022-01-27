import React from 'react';
import { BubbleNode, BubbleProps } from './Bubble';
export declare type BubbleSelectProps = Omit<BubbleProps, 'text' | 'id'> & {
    onSelect?: (bubble: BubbleNode) => void;
    onDeselect?: (bubble: BubbleNode) => void;
    onRemove?: (bubble: BubbleNode) => void;
    bubbleSize?: number;
    allowsMultipleSelection?: boolean;
    children: React.ReactNode;
    style?: object;
    width?: number;
    height?: number;
    removeOnLongPress?: boolean;
    longPressDuration?: number;
    backgroundColor?: string;
    maxSelectedItems?: number;
};
declare const BubbleSelect: ({ onSelect, onDeselect, style, allowsMultipleSelection, children, bubbleSize, onRemove, removeOnLongPress, longPressDuration, width, height, backgroundColor, maxSelectedItems, ...bubbleProps }: BubbleSelectProps) => JSX.Element;
export default BubbleSelect;
