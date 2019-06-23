import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const LineLoader = () => {
  return (
    <SkeletonTheme color='#eeeee' highlightColor='#444'>
      <Skeleton count={1} height='inherit' width={50} />
    </SkeletonTheme>
  );
};

export const BoxLoader = () => {
  return (
    <div style={{ marginLeft: 25 }}>
      <SkeletonTheme color='#eeeee' highlightColor='#444'>
        <Skeleton count={1} height={300} width='100%' />
      </SkeletonTheme>
    </div>
  );
};

export const ChatLoader = () => {
  return (
    <>
      {[1, 2, 3].map(() => (
        <div
          key={Math.random()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 25
          }}
        >
          <Skeleton circle height={80} width={80} />
          <div style={{ marginLeft: 25, width: '100%' }}>
            <Skeleton width='100%' count={3} />
          </div>
        </div>
      ))}
    </>
  );
};

/**
 * Principais Loaders do Dashboard, reunidos em um unico arquivo.
 */
