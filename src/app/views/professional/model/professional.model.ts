export interface Professional {
  _id: String;
  name: String;
  cpf: String;
  cep: String | number;
  city: String;
  uf: String;
  address: String;
  district: String;
  number: number;
  complement: String;
  telFone: String | number;
  cellFone: String | number;
  email: String;
  birthDate: any;
  typeFunction: String;
  obs: String;
  id: String;
}

export type Professionals = Array<Professional>;
