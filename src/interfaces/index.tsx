export interface ITransaction {
    type: string;
    amount: number; // valor transferido
    sourceAccount?: {
        name: string;
        balance: number;
    };
    destinationAccount?: {
        name: string;
        balance: number;
    };
    date: string;
}
export interface IAccount {
    name: string;
    id: string;
    balance: string;
    type?: string;
    updated_at?:string;
    created_at?:string;
    description?:string;
    color?: string;
}

export interface IForm {
    name: string;
    label?: string;
    step?:string
    placeholder?: string;
    type: "text" | "number" | "select" | "password"; // pode expandir depois
    value?: string | number;
    onChange?: (value: any) => void;
    options?: IAccount[]; // apenas se type = "select"
  }