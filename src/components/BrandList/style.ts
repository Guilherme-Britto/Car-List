import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 16px;

  width: 100%;
  max-width: 1100px;

  margin: 0 10px;
  padding: 22px 8.5px;
  border-radius: 4px;

  background-color: var(--Grey3);

  img {
    height: 200px;
    width: 200px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
