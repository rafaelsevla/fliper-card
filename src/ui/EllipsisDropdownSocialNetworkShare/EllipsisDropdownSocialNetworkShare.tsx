import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as IconEllipsis } from './assets/icon-ellipsis.svg';
import interpolateString from 'utils/interpolate-string';
import deviceIsMobile from 'utils/device-is-mobile';

interface Props {
  messageToShare: string;
}

const networkLinks = [
  {
    id: -1,
    label: 'Compartilhe no twitter',
    uri: 'https://twitter.com/intent/tweet?text=<concatitem>'
  },
  {
    id: -2,
    label: 'Compartilhe no whatsapp',
    uri: deviceIsMobile() ? 'whatsapp://send?text=<concatitem>' : 'https://web.whatsapp.com/send?text=<concatitem>'
  }
];

export default function EllipsisDropdownSocialNetworkShare ({ messageToShare }: Props) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  return (
    <>
      <Container>
        <Button onClick={() => setIsOpen((open) => !open)}>
          <IconEllipsis />
        </Button>
        {isOpen && (
          <Dropdown role='menu'>
            {networkLinks.map((option) => (
              <DropdownItemContainer
                key={option.id}
              >
                <DropdownItem
                  href={interpolateString(
                    option.uri,
                    'concatitem',
                    messageToShare
                  )}
                  target='_blank'
                >
                  {option.label}
                </DropdownItem>
              </DropdownItemContainer>
            ))}
          </Dropdown>
        )}
      </Container>
      {isOpen && <DropdownCloser onClick={() => setIsOpen(false)} />}
    </>
  );
}

const Container = styled.div`
 position: relative;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  margin-left: 0;
  padding-left: 0;
  margin-right: 0;
  padding-right: 0;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #FFF;
  box-shadow: 0 0 7px #9AA3BC;
  padding: 5px 0;
  border-radius: 7px;
  min-width: 100px;
  z-index: 50;
`;

const DropdownItemContainer = styled.div`
  text-align:center;
  padding:  5px 10px;
`;

const DropdownItem = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #606377;
`;

const DropdownCloser = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
