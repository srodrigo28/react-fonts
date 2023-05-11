import { Container } from "./styles";

export function SelectInput() {
    return (
        <Container>
            <select>
                <option value="a">Janeiro</option>
                <option value="b">Fevereiro</option>
                <option value="c">Março</option>
            </select>
        </Container>
    )
}