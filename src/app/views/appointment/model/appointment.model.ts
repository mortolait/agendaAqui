export interface Appointment{
    id: String,
    date:string,
    time: any,
    professional: any,
    Client: any,
    service: any,
    value:number,
    status: String,
    obs: String,
    address: String,
    cep: String,
    uf: String,
    city: String,
    district: String,
    number: String,
    complement: String,
}

export type Appointments = Array<Appointment>;
