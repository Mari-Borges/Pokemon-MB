export interface ICartas {
    data: [{
            id: number,
            name: string,
            cards: [{
                data: [{
                    id: string,
                    name: string,
                    supertype:[],
                    subtypes: [],
                    hp: string,
                    types: [],
                    evolvesFrom: string,
                    attacks: [
                        {
                            name: string,
                            cost: [],
                            convertedEnergyCost: number,
                            damage: string,
                            text: string
                        },
                    ],
                    weaknesses: [
                        {
                            type: string,
                            value: string
                        }
                    ],
                    resistances: [
                        {
                            type: string,
                            value: string
                        }
                    ],
                    retreatCost: [],
                    convertedRetreatCost: number,
                    set: {
                        id: string,
                        name: number,
                        series: string,
                        printedTotal: number,
                        total: number,
                        legalities: {
                            unlimited: string
                        },
                        ptcgoCode: string,
                        releaseDate:string,
                        updatedAt: string,
                        images: {
                            symbol: string,
                            logo: string
                        }
                    },
                    number: string,
                    artist: string,
                    rarity: string,
                    flavorText: string,
                    nationalPokedexNumbers: [],
                    legalities: {
                        unlimited: string
                    },
                    images: {
                        small: string,
                        large:string
                    },
                    tcgplayer: {
                        url: string,
                        updatedAt: string,
                        prices: {
                            holofoil: {
                                low: number,
                                mid: number,
                                high: number,
                                market: number,
                                directLow: number
                            },
                        }
                    },
                    cardmarket: {
                        url: string,
                        updatedAt: string,
                        prices: {
                            averageSellPrice: number,
                            lowPrice: number,
                            trendPrice: number,
                            germanProLow: number                
                            suggestedPrice: number,
                            reverseHoloSell: number,
                            reverseHoloLow: number,
                            reverseHoloTrend: number               
                            lowPriceExPlus: number,
                            avg1: number,
                            avg7: number
                            avg30: number,
                            reverseHoloAvg1: number,
                            reverseHoloAvg7: number,
                            reverseHoloAvg30: number
                        }
                    }
                }]
       }]   
   }]
}