export interface Client {
    _id: String;
    name: String;
    cpf: String;
    typePerson: String;
    cep: String | number
    city: String;
    uf: String;
    address: String;
    district: String;
    number: number;
    telFone: String | number
    cellFone: String | number;
    email: String;
    birthDate: any;
    profession: String;
    complement: String;
    obs: String;
    status: String;
    id: String;
  }
  
  export type Clients = Array<Client>;
  