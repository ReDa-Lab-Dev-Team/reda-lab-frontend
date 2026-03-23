export type PublicationType =
  | "Workshop"
  | "Conference"
  | "Journal"
  | "Book Chapter"
  | string;

export type PublicationColor =
  | "green"
  | "blue"
  | "red"
  | "yellow"
  | "purple"
  | string;

export interface PublicationPaper {
  id: string;
  title: string;
  authors: string[];
  date: string;
  abstract: string;
  type: PublicationType;
  color: PublicationColor;
}