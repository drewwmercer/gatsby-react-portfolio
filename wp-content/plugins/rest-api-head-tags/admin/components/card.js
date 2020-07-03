import styled from "@emotion/styled";

export default styled.div`
  position: relative;
  margin: ${({ margin }) => margin || 0};
  padding: 32px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 1px 4px 0 rgba(31, 56, 197, 0.12),
    0 8px 12px 0 rgba(31, 56, 197, 0.12);
  border-radius: 4px;
`;
