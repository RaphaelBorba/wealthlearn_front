

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
  indexes: string[];
  stocks: string[];
}

type StockData = {
  results: [
    {
      currency: string;
      twoHundredDayAverage: number;
      twoHundredDayAverageChange: number;
      twoHundredDayAverageChangePercent: number;
      marketCap: number;
      shortName: string;
      longName: string;
      regularMarketChange: number;
      regularMarketChangePercent: number;
      regularMarketTime: string;
      regularMarketPrice: number;
      regularMarketDayHigh: number;
      regularMarketDayRange: string;
      regularMarketDayLow: number;
      regularMarketVolume: number;
      regularMarketPreviousClose: number;
      regularMarketOpen: number;
      averageDailyVolume3Month: number;
      averageDailyVolume10Day: number;
      fiftyTwoWeekLowChange: number;
      fiftyTwoWeekLowChangePercent: number;
      fiftyTwoWeekRange: string;
      fiftyTwoWeekHighChange: number;
      fiftyTwoWeekHighChangePercent: number;
      fiftyTwoWeekLow: number;
      fiftyTwoWeekHigh: number;
      symbol: string;
      priceEarnings: number;
      earningsPerShare: number;
      logourl: string;
      summaryProfile?: {
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
        website: string;
        industry: string;
        industryKey: string;
        industryDisp: string;
        sector: string;
        sectorKey: string;
        sectorDisp: string;
        longBusinessSummary: string;
        fullTimeEmployees: number;
        companyOfficers: string[];
      };
    }
  ];
  requestedAt: string;
  took: string;
};