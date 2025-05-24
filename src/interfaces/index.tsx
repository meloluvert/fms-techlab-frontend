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
export interface IAccountType{
    name: string,
    id:string
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
    options?: IAccountType[] | IAccount[] | undefined; // apenas se type = "select"
  }

  export interface IUser{
    id: string
    password?: string
    name: string
    email:string
  }