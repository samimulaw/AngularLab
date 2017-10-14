export enum Condition{
    NEW, USED
}
Condition[Symbol.iterator] = function*():Iterator<Condition> {
    yield Condition.NEW;
    yield Condition.USED;
};


export class Product {
    id: number;
    name: string;
    condition: Condition;
}

export const products = [{
    id: 1,
    name: 'caco-cola',
    condition: Condition.NEW
},
{
    id: 2,
    name: 'Pepsi',
    condition: Condition.USED
}];
