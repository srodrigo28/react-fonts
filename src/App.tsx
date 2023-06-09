import GlobalStyles from "./styles/GlobalStyles";
import { VscAdd } from "react-icons/vsc";
import { RiAncientPavilionFill } from "react-icons/ri";
import { TButton } from "./components/Button/styles";
import { MdAddShoppingCart } from "react-icons/md";
import { FcCamera } from "react-icons/fc";
import { SelectInput } from "./components/List/SelectInput";

function App() {
  return (
    <>
      <GlobalStyles />
      <TButton>
        <VscAdd color='red' />
      </TButton>
      <TButton>
        <FcCamera color='red' />
      </TButton>
      <TButton>
        <MdAddShoppingCart />
      </TButton>
      <TButton>
        <RiAncientPavilionFill />
      </TButton>
      <SelectInput />
    </>
  )
}
export default App