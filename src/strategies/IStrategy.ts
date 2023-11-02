// src/strategies/IStrategy.ts
// 
// import { ICandlestick } from '../interfaces/ICandlestick';
// import { IOrderBook } from '../exchanges/IExchange';
// 
// export interface IStrategy {
//   initialize(): Promise<void>;
//   evaluateMarketData(candlesticks: ICandlestick[], orderBook: IOrderBook): Promise<IAction[]>;
//   ... autres méthodes nécessaires pour implémenter une stratégie de trading
// }
// 
// export interface IAction {
//   type: 'buy' | 'sell' | 'hold';
//   quantity?: number;
//   price?: number;
//   ... autres propriétés pour définir une action de trading
// }
// 
// ... autres interfaces pour les données de stratégie
