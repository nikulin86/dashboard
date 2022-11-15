import expenseLogo1 from "../assets/expenseLogo1.png";
import expenseLogo2 from "../assets/expenseLogo2.png";
import expenseLogo3 from "../assets/expenseLogo3.png";
import expenseLogo4 from "../assets/expenseLogo4.png";
import expenseLogo5 from "../assets/expenseLogo5.png";
import expenseLogo6 from "../assets/expenseLogo6.png";
import expenseLogo7 from "../assets/expenseLogo7.png";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { ILinksData } from "../Types";

export const linksData = [
  {
    title: "Dashboard",
    icon: SiGoogleanalytics,
  },
  {
    title: "Buy / Sell",
    icon: AiFillAppstore,
  },
  {
    title: "News",
    icon: BiNews,
  },

  {
    title: "Send Money",
    icon: BiRocket,
  },
  {
    title: "Deposit",
    icon: BsCashStack,
  },

  {
    title: "Transactions",
    icon: FaWallet,
  },
  {
    title: "Account",
    icon: MdAccountCircle,
  },
  {
    title: "Settings",
    icon: AiFillSetting,
  },
];





export const dataExpense = [
  {
    logo: expenseLogo1,
    name: "Amazon",
    price: "-$5K",
  },
  {
    logo: expenseLogo2,
    name: "Spotify",
    price: "-$50",
  },
  {
    logo: expenseLogo3,
    name: "Netflix",
    price: "-$200",
  },
  {
    logo: expenseLogo4,
    name: "Adobe",
    price: "-$20K",
  },
  {
    logo: expenseLogo5,
    name: "Apple",
    price: "-$30K",
  },
  {
    logo: expenseLogo6,
    name: "Airbnb",
    price: "-$7K",
  },
  {
    logo: expenseLogo7,
    name: "Google",
    price: "-$70",
  },
];

export const dataTransaction = [
  {
    data2: 2000,
    data1: 2400,
  },
  {
    data2: 4000,
    data1: 1398,
  },
  {
    data2: 5000,
    data1: 12800,
  },
  {
    data2: 8780,
    data1: 3908,
  },
  {
    data2: 9890,
    data1: 4800,
  },
  {
    data2: 11390,
    data1: 3800,
  },
  {
    data2: 3490,
    data1: 4300,
  },
];


export const dataOverview = [
  {
    data1: 4000,
    data2: 2400,
  },
  {
    data1: 3000,
    data2: 1398,
  },
  {
    data1: 2000,
    data2: 9800,
  },
  {
    data1: 2780,
    data2: 3908,
  },
  {
    data1: 1890,
    data2: 4800,
  },
  {
    data1: 2390,
    data2: 3800,
  },
  {
    data1: 3490,
    data2: 4300,
  },
];


export const dataActivityLog = [
  {
    day: "Sun",
    date: "6/9 7:11pm",
    name: "Adobe Creative Suit Monthly Plan",
    status: "Paid",
  },
  {
    day: "Fri",
    date: "6/7 1:11am",
    name: "Amazon Premium Card",
    status: "Paid",
  },
  {
    day: "Mon",
    date: "6/3 3:07pm",
    name: "Sent Payment to Cleint X",
    status: "Paid",
  },
  {
    day: "Thu",
    date: "5/30 3:00pm",
    name: "Changed Password",
    status: "Account",
  },
]