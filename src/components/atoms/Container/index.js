import styled from 'styled-components'
/** generic container and get customize */
export const Container = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ jusify }) => jusify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};2
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  `
