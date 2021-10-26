import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;

  .hamburger__button {
    border: none;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
