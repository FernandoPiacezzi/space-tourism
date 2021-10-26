import styled from 'styled-components';

import background_home_mobile from '../../assets/home/background-home-mobile.jpg';

export const Container = styled.div`
  padding: calc(48px + 2rem) 2rem 2rem 2rem;

  background-image: url(${background_home_mobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Bellefair', serif;
    font-size: 6rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 2rem 0;
    color: var(--white);
  }

  h5 {
    font-size: 1rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    letter-spacing: 4.75px;
    text-transform: uppercase;
    padding: 3rem 0 0;
  }

  p {
    font-family: 'Barlow', sans-serif;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  button {
    margin-top: 3rem;
    height: 10rem;
    width: 10rem;
    border-radius: 90q;
    border: none;
    color: var(--black);
    font-family: 'Bellefair', sans-serif;
    letter-spacing: 1px;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
