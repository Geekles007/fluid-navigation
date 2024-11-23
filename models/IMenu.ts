export interface IMenu {
  label: string;
  key: string;
  icon: string;
  children?: Array<IMenu>;
}
