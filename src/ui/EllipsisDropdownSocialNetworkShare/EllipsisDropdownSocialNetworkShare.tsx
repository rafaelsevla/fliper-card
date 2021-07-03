import { useState } from 'react';
import styled from 'styled-components';

import interpolateString from 'utils/interpolate-string';
import { ReactComponent as IconEllipsis } from './assets/icon-ellipsis.svg';

interface Props {
  messageToShare: string;
}

const networkLinks = [
  { id: -1, label: 'Compartilhe no twitter', uri: 'https://twitter.com/intent/tweet?text=<concatitem>' },
  { id: -2, label: 'Compartilhe no whatsapp', uri: 'https://web.whatsapp.com/send?text=<concatitem>' }
]

export default function EllipsisDropdownSocialNetworkShare ({ messageToShare }: Props) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  return (
    <Container>
      <Button onClick={() => setIsOpen((open) => !open)}>
        <IconEllipsis />
      </Button>
      {isOpen && (
        <Dropdown role='menu'>
          {networkLinks.map((option) => (
            <DropdownItemContainer>
              <DropdownItem
                key={option.id}
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
  )
}

const Container = styled.div`
 position: relative;
  svg {
    cursor: pointer;
  }
`

const Button = styled.button`
  background: transparent;
  border: 0;
  margin-left: 0;
  padding-left: 0;
  margin-right: 0;
  padding-right: 0;
`

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
`

const DropdownItemContainer = styled.div`
  text-align:center;
  padding:  5px 10px;
`

const DropdownItem = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`
