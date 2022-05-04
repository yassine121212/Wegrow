import styled from 'styled-components'

export const Container= styled.div`
    padding: 50px 30px;
    background: radial-gradient(circle, rgba(92,39,251,1)0%. rgba(112,71,247, 1) 100%);
`
export const Wrapper =styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    mac-width:100px;
    margin: 0 auto;
`
export const Column =styled.div`
    display: flex;
    flex-direction:column;
    text-align: left;
    margin-left: 60px
`
export const Row =styled.div`
    display: grid;
    grid-template-column: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media(max-width:1000px){
        grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); 
    }
`

export const Link =styled.div`
    color: #000000;
    marging-bottom: 0px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #000000;
        transition: 200ns ease-in;
    }
`

export const Title  =styled.div`
    font-size: 24px;
    color: #000000;
    margin-bottom: 40px;
    font-weight: bold;
`