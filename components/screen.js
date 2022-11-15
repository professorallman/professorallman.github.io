import styled from 'styled-components';
import Image from 'next/future/image';
// coverImageLandscape={meLandscape} coverImagePortrait={mePortrait} 
function ScreenComponent({className, children}){
    return <section className={className}>
        <div>
         {children}
        </div>
    </section>
}
const Screen  = styled(ScreenComponent)`
&{
    position:relative;
    overflow:hidden;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
   
    >div{
        color:white;
        width:100vw;
        height:100vh;
        background-color:#00000063;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >*{
            padding:10px;
        }
    }

    @media screen and (orientation: landscape){
        &{
            background-image:${(props)=>`url(${props.coverImageLandscape.src})`}
        }
    }
    @media screen and (orientation: portrait){
        &{
            background-image:${(props)=>`url(${props.coverImagePortrait.src})`}
        }
    }

}
`

export default Screen;
/**
    &{
        z-index: 100;
        background-color: #00000094;
        width: 100vw;
        height: 100vh;
        color: white;

        img{
            z-index:-100;
            filter:blur(1px)
        }
    }
 */