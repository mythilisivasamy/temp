export interface QBType{
    key:string,
    label:string,
    value:string,
    required?:boolean,
    type:string,
    order?:number,
    name?:string
}

export const QBASE:QBType[]=[];
