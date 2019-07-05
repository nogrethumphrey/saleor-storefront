export type Position = "center" | "left" | "right";

export interface IProps {
  children: React.ReactNode;
  position: Position;
  show: boolean;
}
