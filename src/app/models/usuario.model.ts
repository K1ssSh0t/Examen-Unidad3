export interface Usuario {
  gender: string;
  name: Name;

  email: string;

  dob: Dob;

  phone: string;
  cell: string;

  picture: Picture;
  nat: string;
}
export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Dob {
  age: number;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
