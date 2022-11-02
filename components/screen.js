import styled from 'styled-components';
import Image from 'next/future/image';
// coverImageLandscape={meLandscape} coverImagePortrait={mePortrait} 
function ScreenComponent({className, children, coverImageLandscape,  coverImagePortrait, coverImageAlt}){
    return <section className={className}>
        <Image src={coverImageLandscape} alt={coverImageAlt} className="landscape"/>
        <Image src={coverImagePortrait} alt={coverImageAlt} className="portrait"/>
        <div>
         {children}
        </div>
    </section>
}
const Screen  = styled(ScreenComponent)`
&{
    position:relative;
    overflow:hidden;

    .landscape,.portrait{
        display:none;
        width:initial;
        height:initial;
        position:absolute;
        top:0;
        left:0;
        z-index:-100;
    }
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
        .landscape{
            display:block;
            width:100%;
        }
    }
    @media screen and (orientation: portrait){
        .portrait{
            display:block;
            height:100%;
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