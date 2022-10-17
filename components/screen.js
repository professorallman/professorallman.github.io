import styled from 'styled-components';
import Image from 'next/future/image';
function ScreenComponent({className, children, coverImage, coverImageAlt}){
    return <section className={className}>
        <Image src={coverImage} alt={coverImageAlt} />
        <div>
         {children}
        </div>
    </section>
}
const Screen = styled(ScreenComponent)`
&>div>*{
    padding:20px;
}
@media screen and ( orientation: landscape){
    & {
        height: 100vh;
        img{
            position:absolute;
            left:0;
            top:0;
            width: 100vw;
            height:100vh;
            object-fit: cover; 
            z-index:-100;
            filter:blur(1px);
        }
        >div{
            display:flex; 
            flex-direction:column;
            color:white;
            background-color:#00000070;
            height:100vh;
            align-items:center;
           
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