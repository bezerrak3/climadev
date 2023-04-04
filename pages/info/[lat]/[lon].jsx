import styled from "styled-components";

import ClimaCard from "../../../src/components/climaCard/ClimaCard";
import Container from "../../../src/components/layout/container/Container";
import Navbar from "../../../src/components/navbar/Navbar"

const Body = styled.div`
    background-color: ${props => props.theme.colors.grey};
    min-height: 100vh;
`

const Content = styled.div`
    padding: 80px 0;
`
const Text = styled.p`
    font-size: 20px;
    padding: 0;
    margin: 0;

`
const CityName = styled.h2`
    font-size: 60px;
    padding: 0;
    margin: 0;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between1;
    flex-wrap: wrap;
    gap: 20px;
`

export default function InfoPage(){
    return(
        <>
           <Navbar />
           <Body>
            <Container>
              <Content>
               <Text>Previsão do tempo para</Text>
               <CityName>Vitoria, ES, Brasil</CityName>
              </Content>
              <InfoContainer>
                <ClimaCard/>
                <ClimaCard />
                <ClimaCard />
              </InfoContainer>
            </Container>
           </Body>
        </>
    )
}