import styled from "styled-components";

const Icon = styled(({className, name, href})=><img src={"/icons/" + name + ".svg"} />)`

`

export default Icon;