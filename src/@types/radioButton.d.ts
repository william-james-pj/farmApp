export type RadioButtonProps = {
  id: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
};
