import styled from 'styled-components';

export const Container = styled.div`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 12rem;

  button {
    padding: 0 2rem;
    height: 3rem;

    background: var(--blue-light);

    border: none;
    border-radius: 0.25rem;

    color: var(--shape);
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
