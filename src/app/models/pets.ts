export interface Pet{
    id: number;
    name: string;
    description:string;
    imageUrl: string;
}
export interface Apiresponse{
    //numero total de registros o datos
    count:number;
    data: Pet[];
}