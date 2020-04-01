import styled from 'styled-components';

export const TextForScreenReader = styled.span({
    position: 'absolute',
    left: '-999em',
    top: '-999em;'
});

export const SiteLogo = styled.div(props => ({
    background: `url(${props.backgroundImage}) 0 0 no-repeat`,
    height: '277px',
    width: '100%'
})); 