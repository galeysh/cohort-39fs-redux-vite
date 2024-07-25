import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";
import Button from "components/Button/Button";

import { PageWrapper } from "./styles"

function Homework15() {
    return (
        <PageWrapper>
            <Input id="id" name="Input" label="Input"/>
            <Counter count={0} onPlus={()=>{}} onMinus={()=>{}} />
            <Button name="Start" />
        </PageWrapper>
    )
}

export default Homework15