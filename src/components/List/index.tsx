import { useState } from "react"
import { SelectInput } from "./SelectInput";

interface IpropsList{
    descricao: string,
    vencimento: string,
    status: string
}

// TransactionsProvider({ children }: TransactionsProviderProps) {
export function Lista({ descricao, vencimento, status }: IpropsList) {
    const [data, setData] = useState<IpropsList>();
    return (
        <div>
            <SelectInput />
            <p>
                <span>{descricao}</span>
                <span>{vencimento}</span>
                <span>{status}</span>
            </p>
        </div>
    )
}