
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract goods(): Goods[] | Promise<Goods[]>;

    abstract goodsItem(id: string): Goods | Promise<Goods>;
}

export class Goods {
    id?: number;
    name?: string;
}
