// src/data/MarketData.ts
// 
// import { IExchange } from '../exchanges/IExchange';
// import { ICandlestick } from '../interfaces/ICandlestick';
// 
// export class MarketData {
//   private exchange: IExchange;
// 
//   constructor(exchange: IExchange) {
    // this.exchange = exchange;
//   }
// 
//   async getLatestCandlesticks(symbol: string, interval: string, limit: number = 100): Promise<ICandlestick[]> {
    // return await this.exchange.getCandlestickData(symbol, interval, limit);
//   }
// 
//   async getCurrentPrice(symbol: string): Promise<number> {
    // return await this.exchange.getCurrentPrice(symbol);
//   }
// 
//   async getOrderBook(symbol: string, limit: number = 100): Promise<IOrderBook> {
    // return await this.exchange.getOrderBook(symbol, limit);
//   }
// 
//   ... autres méthodes pour accéder aux données du marché
// }
// 
// export interface IOrderBook {
//   bids: IOrderBookEntry[];
//   asks: IOrderBookEntry[];
// }
// 
// export interface IOrderBookEntry {
//   price: number;
//   quantity: number;
// }
// 
// ... autres interfaces pour les données du marché
