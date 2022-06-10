declare module '@therapy' {
  export interface IOption {
    title: string;
    url: string;
  }
  export interface ITherapy {
    _id: string;
    title: string;
    image?: string;
    options?: Option[];
  }
}
