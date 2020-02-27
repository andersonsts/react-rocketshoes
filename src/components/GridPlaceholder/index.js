import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { ImageGroup, Container } from './styles';

export default function GridPlaceholder({ repeatCount }) {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <Container>
      {howMany.map(placeholder => (
        <ImageGroup key={placeholder}>
          <figure style={{ alignSelf: 'center' }}>
            <Skeleton height={235} duration={2} />
          </figure>
          <strong>
            <Skeleton width={220} height={46} duration={2} />
          </strong>
          <button type="button">
            <SkeletonTheme color="#7159c1">
              <Skeleton width={273} height={42} duration={2} />
            </SkeletonTheme>
          </button>
        </ImageGroup>
      ))}
    </Container>
  );
}

GridPlaceholder.propTypes = {
  repeatCount: PropTypes.number,
};

GridPlaceholder.defaultProps = {
  repeatCount: 6,
};
