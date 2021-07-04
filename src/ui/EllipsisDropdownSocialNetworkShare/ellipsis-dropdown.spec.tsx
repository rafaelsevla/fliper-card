import EllipsisDropdownSocialNetworkShare from './EllipsisDropdownSocialNetworkShare';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const shareOnTwitterText = 'Compartilhe no twitter';
const shareOnWhatsappText = 'Compartilhe no whatsapp';
const messageToShare = 'Veja isso!';

describe('Dropdown', () => {
  it('should start closed', () => {
    render(<EllipsisDropdownSocialNetworkShare messageToShare={messageToShare}/>);

    expect(screen.queryByText(shareOnTwitterText)).not.toBeInTheDocument();
    expect(screen.queryByText(shareOnWhatsappText)).not.toBeInTheDocument();
  });


  it('should show options when open', () => {
    render(<EllipsisDropdownSocialNetworkShare messageToShare={messageToShare}/>);

    expect(screen.queryByText(shareOnTwitterText)).not.toBeInTheDocument();
    expect(screen.queryByText(shareOnWhatsappText)).not.toBeInTheDocument();

    const dropdownButton = screen.getByRole('button');

    userEvent.click(dropdownButton);

    expect(screen.getByText(shareOnTwitterText)).toBeInTheDocument();
    expect(screen.getByText(shareOnWhatsappText)).toBeInTheDocument();
  });

  it('should close the dropdown', () => {
    render(<EllipsisDropdownSocialNetworkShare messageToShare={messageToShare}/>);

    const dropdownButton = screen.getByRole('button');

    userEvent.click(dropdownButton);

    expect(screen.getByText(shareOnTwitterText)).toBeInTheDocument();
    expect(screen.getByText(shareOnWhatsappText)).toBeInTheDocument();

    userEvent.click(dropdownButton);

    expect(screen.queryByText(shareOnTwitterText)).not.toBeInTheDocument();
    expect(screen.queryByText(shareOnWhatsappText)).not.toBeInTheDocument();
  });

  it('should close the dropdown when click in any place of screen', () => {
    render( <EllipsisDropdownSocialNetworkShare messageToShare={messageToShare}/>);

    const dropdownButton = screen.getByRole('button');
    userEvent.click(dropdownButton);

    expect(screen.getByText(shareOnTwitterText)).toBeInTheDocument();
    expect(screen.getByText(shareOnWhatsappText)).toBeInTheDocument();

    const closerDropdown = screen.getByTestId('ellipsis-dropdown-closer');
    userEvent.click(closerDropdown);

    expect(screen.queryByText(shareOnTwitterText)).not.toBeInTheDocument();
    expect(screen.queryByText(shareOnWhatsappText)).not.toBeInTheDocument();
  });


});
