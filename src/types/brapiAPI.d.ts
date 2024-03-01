

type Stock = {
    stock: string,
    name: string,
    close: number,
    change: number,
    volume: number,
    market_cap: number,
    logo: string,
    sector: string,
    type: string,
}

type BrapiResponsePrincipalPage = {
    indexes: { stock: string, name: string }[];
    stocks: Stock[]
}

type availableStocks = {
    indexes:string[];
    stocks:string[];
}