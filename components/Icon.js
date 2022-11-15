import styled from "styled-components";

const Icon = styled(({className, name, href})=><img className={className} src={"/icons/" + name + ".svg"} title={name} />)`
&{
    width:100%;
}
`

export default Icon;