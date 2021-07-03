import styled from 'styled-components';

import { EllipsisDropdownSocialNetworkShare } from 'ui';

export default function Card () {
  return (
    <Container>

      <Header>
        <HeaderTitle>
          Seu resumo
        </HeaderTitle>

        <EllipsisDropdownSocialNetworkShare
          messageToShare='Veja isso!!'
        />
      </Header>

      <InvestedAmountContainer>
        <Text>Valor investido</Text>
        <TextAmountValue>R$ 3.200.876,00</TextAmountValue>
      </InvestedAmountContainer>

      <>
        <ItemDetailContainer>
          <Text>Rentabilidade/mês</Text>
          <TextItemValue>2,767%</TextItemValue>
        </ItemDetailContainer>

        <ItemDetailContainer>
          <Text>CDI</Text>
          <TextItemValue>3,45%</TextItemValue>
        </ItemDetailContainer>

        <ItemDetailContainer>
          <Text>Ganho/mês</Text>
          <TextItemValue>R$2182,22</TextItemValue>
        </ItemDetailContainer>
      </>

      <Footer>
        <ButtonLink href='https://fliper.app/' target='_blank'>
          Ver mais
        </ButtonLink>
      </Footer>

    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  width: 330px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px #9aa3bc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  color: #3B5CB8;
  font-size: 21px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
`;

const InvestedAmountContainer = styled.div`
  padding: 30px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-size: 14px;
  color: #606377;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

const TextAmountValue = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #3B5CB8;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TextItemValue = styled(TextAmountValue)`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  border-top: 2px solid #f1f1f1;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

const ButtonLink = styled.a`
	cursor: pointer;
	outline: inherit;
  font-family: 'Montserrat';
  font-weight: 700;
  color: #3B5CB8;
  border: 1px solid #afb0b6;
  font-size: 16px;
  padding: 7px 13px;
  background-color: #FFF;
  border-radius: 25px;
  box-shadow: 1px 1px #9aa3bc;
  text-decoration: none;
  &:hover {
    color: #fff;
    background-color: #3B5CB8;
  }
  &:active {
    background-color: #cecece;
    color: #3B5CB8;
  }
`;
