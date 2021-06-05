import styled, { css } from 'styled-components';

const Base = css`
  color: #212121;
  border-bottom: solid #424242;
`;

const H1 = styled.h1`
  ${Base}
  border-bottom-width: 6px;
`;

const H2 = styled.h2`
  ${Base}
  border-bottom-width: 5px;
`;

const H3 = styled.h3`
  ${Base}
  border-bottom-width: 4px;
`;

const H4 = styled.h4`
  ${Base}
  border-bottom-width: 3px;
`;

const H5 = styled.h5`
  ${Base}
  border-bottom-width: 2px;
`;

const H6 = styled.h6`
  ${Base}
  border-bottom-width: 1px;
`;

export const HeadLine = { H1, H2, H3, H4, H5, H6 };
