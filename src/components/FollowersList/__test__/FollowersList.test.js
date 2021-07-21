import { render, screen, fireEvent } from '@testing-library/react';
import FollowerList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';
const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowerList />
    </BrowserRouter>
  );
};

// Mocking axios request

jest.mock('axios', () => ({
  __esModule: true,
  default: {
     get: () => ({
      data: {
        results: [
          {
            name: {
              first: 'Apoorv',
              last: 'Taneja',
            },
            picture: {
              large: 'https://unsplash.com/photos/qwtCeJ5cLYs',
            },
            login: {
              username: 'apoorv_taneja',
            },
          },
        ],
      }
     })
  }
}));


describe('Follower List', () => {
  it('Should render single follower item', async () => {
    render(<MockFollowersList/>);
    const followerDivElement =  await screen.findByTestId("follower-item-0")
    expect(followerDivElement).toBeInTheDocument()
  });

  it('Should mock axios get request', async () => {
    render(<MockFollowersList/>);
    const followerDivElement =  await screen.findByTestId("follower-item-0") 
    expect(followerDivElement).toBeInTheDocument()
  });
});
