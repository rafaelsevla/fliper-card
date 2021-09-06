import { DotsLoadingAnimation, EllipsisDropdownSocialNetworkShare } from 'service/ui';
import { valuesFormater } from 'service/utils/format-values';
import { WealthProps } from 'service/utils/wealth';
import styled from 'styled-components';

interface Props extends WealthProps {
  loading: boolean
}

export default function Card ({
  cdi,
  total,
  profitability,
  gain,
  loading
}: Props) {

  function displayLoadingOrValue (value: any) {
    if (loading) return <DotsLoadingAnimation />;
    return value;
  }

  return (
    <Container>

      <Header>
        <HeaderTitle>
          Seu resumo
        </HeaderTitle>

        <EllipsisDropdownSocialNetworkShare
          messageToShare={`Veja isso!! ${window.location.href}`}
        />
      </Header>

      <InvestedAmountContainer>
        <Text>Valor investido</Text>
        <TextAmountValue>{displayLoadingOrValue(valuesFormater('money', total))}</TextAmountValue>
      </InvestedAmountContainer>

      <>
        <ItemDetailContainer>
          <Text>Rentabilidade/mês</Text>
          <TextItemValue>{displayLoadingOrValue(valuesFormater('percent', profitability))}</TextItemValue>
        </ItemDetailContainer>

        <ItemDetailContainer>
          <Text>CDI</Text>
          <TextItemValue>{displayLoadingOrValue(valuesFormater('percent', cdi))}</TextItemValue>
        </ItemDetailContainer>

        <ItemDetailContainer>
          <Text>Ganho/mês</Text>
          <TextItemValue>{displayLoadingOrValue(valuesFormater('money', gain))}</TextItemValue>
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

Card.defaultProps = {
  loading: false
};

const Container = styled.div`
  background-color: #fff;
  width: 300px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px #9aa3bc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-size: 21px;
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
  font-weight: 500;
`;

const TextAmountValue = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 20px;
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
  outline: inherit;
  font-weight: 700;
  border: 1px solid #afb0b6;
  font-size: 16px;
  padding: 7px 13px;
  background-color: #FFF;
  border-radius: 25px;
  box-shadow: 1px 1px #9aa3bc;
  &:hover {
    color: #fff;
    background-color: #3B5CB8;
  }
  &:active {
    background-color: #cecece;
    color: #3B5CB8;
  }
`;

const TextItemValue = styled(TextAmountValue)`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px
`;
