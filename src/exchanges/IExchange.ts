// src/exchanges/IExchange.ts
// 
// import { ICandlestick } from '../interfaces/ICandlestick';
// 
// export interface IExchange {
//   getBalance(): Promise<number>;
//   getOpenPositions(): Promise<IPosition[]>;
//   getEquity(): Promise<number>;
//   getCandlestickData(symbol: string, interval: string, limit: number): Promise<ICandlestick[]>;
//   getCurrentPrice(symbol: string): Promise<number>;
//   getOrderBook(symbol: string, limit: number): Promise<IOrderBook>;
//   ... autres méthodes pour interagir avec l'exchange
// }
// 
// export interface IPosition {
//   ... structure de données de position
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
// ... autres interfaces pour les données de l'exchange
