export type BallProps = {
  onSelect: (ball: number) => void;
  color?: string;
  number: number | string;
};

export type BallColorStyle = {
  isSelected?: boolean;
  color?: string;
};
