import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { rest } from 'msw';
import { server } from "../../mocks/server";
import LinkForm from '.';

const queryClient = new QueryClient();

describe('link component', () => {

const linkComponent =
<QueryClientProvider client={queryClient}>
  <LinkForm />
</QueryClientProvider>


  test('Can shorten one or many URL(s)', async () => {
    const user = userEvent.setup();
    render(linkComponent);

    const input = screen.getByRole('textbox');
    await user.type(input, 'google.com');
    expect(input).toHaveValue('google.com');

    const button = screen.getByRole('button', {name: /shorten it!/i});
    await user.click(button);
    const link = await screen.findByText('https://shrtco.de/zcuzD');
    expect(link).toBeInTheDocument();

    await user.type(input, 'github.com');
    await user.click(button);

    const links = await screen.findAllByTestId('shortened-link');
    expect(links).toHaveLength(2);
  });

  test('localStorage should be updated after shorten urls', async () => {
    render(linkComponent);

    const links = localStorage.getItem('links');
    const linksArray = JSON.parse(links || "") ;
    expect(linksArray).toHaveLength(2);
  });

  test('Can copy the shortened link to the clipboard', async () => {
    const user = userEvent.setup();

    render(linkComponent);

    const button = await screen.findAllByRole('button', {name : /copy/i});
    await user.click(button[0]);

    const button1 = await screen.findByRole('button', {name: /copied!/i})
    expect(button1).toBeInTheDocument();

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe("https://shrtco.de/zcuzD");
  });

  test('Handles server error', async () => {
    server.use(
      rest.get('https://api.shrtco.de/v2/shorten',(req, res, ctx) => {
        return res (
          ctx.status(400)
        )
      })
    );

    const user = userEvent.setup();

    render(linkComponent);

    const input = screen.getByRole('textbox');
    await user.type(input, 'google');

    const button = screen.getByRole('button', {name: /shorten it!/i});
    await user.click(button);
    
    const errorMessage = await screen.findByText('Something went wrong : Request failed with status code 400');
    expect(errorMessage).toBeInTheDocument();
  })
});