export enum TabsValue {
  Therapies = 'therapies',
  Baths = 'baths',
  About = 'about',
}

export interface Props {
  children: JSX.Element;
}

export interface LinkTabProps {
  value: string;
  label?: string;
  href: string;
}