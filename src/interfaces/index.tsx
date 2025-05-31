

export interface ITransaction {
    id:string;
    destinationBalance?: number,
    originBalance?: number,
    type?: string;
    amount: number; 
    originAccount?: IAccount | null;
    destinationAccount?: IAccount | null;
    description:string
    created_at: Date;
}
export interface IAccountType{
    name: string,
    id?:string
}
export interface IAccount {
    name: string;
    id: string;
    balance: string;
    type?: IAccountType;
    updated_at?:Date | string;
    created_at?:Date | string;
    description?:string;
    color?: string;
}

export interface IForm {
    name: string;
    label?: string;
    step?:string
    placeholder?: string;
    type: "text" | "number" | "select" | "password" | "email"; // pode expandir depois
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options?: IAccountType[] | IAccount[] | undefined; // apenas se type = "select"
    required?: boolean;
    readonly?: boolean
    disabled?: boolean
  }

  export interface IUser{
    id: string
    password?: string
    name: string
    email:string
  }


  