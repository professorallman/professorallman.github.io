import styled from "styled-components";
import Image from 'next/future/image'
const Icon = styled(({className, name, href})=><Image className={className} src={"/icons/" + name + ".svg"} title={name} alt=""/>)`
&{
    width:100%;
}
`

export default Icon;