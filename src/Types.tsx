import * as Icons from 'react-icons/fi'


export interface IExpense {
    logo: string,
    name: string,
    price: string,
}

export interface ITransaction {
    data2: number,
    data1: number,
}
export interface IOverview {
    data1: number,
    data2: number,
}
export interface IActivityLog {
    day: string,
      date: string,
      name: string,
      status: string,
}


export interface IWallets {
    name: string,
    balance: string,
    USD: string,
    image: string,
} 
export interface ILinksData {
    title: string,
    icon: keyof typeof Icons
} 