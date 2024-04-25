import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreackPoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 2rem;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
    display: block;
  }

  > svg {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
  }
`;