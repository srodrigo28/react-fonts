interface IpropsList{
    descricao: string,
    vencimento: string,
    status: string
}
// TransactionsProvider({ children }: TransactionsProviderProps) {
export function Lista( {descricao, vencimento, status } : IpropsList ){
    return (
        <p>
            <span>{descricao}</span>
            <span>{vencimento}</span>
            <span>{status}</span>
        </p>
    )
}