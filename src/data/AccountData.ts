// src/data/AccountData.ts
// 
// import { IExchange } from '../exchanges/IExchange';
// 
// export interface IAccountInfo {
//   balance: number;
//   openPositions: IPosition[];
//   equity: number;
//   ... autres informations du compte
// }
// 
// export interface IPosition {
//   ... structure de données de position
// }
// 
// export class AccountData {
//   private exchange: IExchange;
// 
//   constructor(exchange: IExchange) {
    // this.exchange = exchange;
//   }
// 
//   async getBalance(): Promise<number> {
    // return await this.exchange.getBalance();
//   }
// 
//   async getOpenPositions(): Promise<IPosition[]> {
    // return await this.exchange.getOpenPositions();
//   }
// 
//   async getEquity(): Promise<number> {
    // return await this.exchange.getEquity();
//   }
// 
//   async getAccountInfo(): Promise<IAccountInfo> {
    // const balance = await this.getBalance();
    // const openPositions = await this.getOpenPositions();
    // const equity = await this.getEquity();
    // return {
    //   balance,
    //   openPositions,
    //   equity,
    //   ... autres informations du compte
    // };
//   }
//   
//   ... autres méthodes pour interagir avec les données du compte
// }
