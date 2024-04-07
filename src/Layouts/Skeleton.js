import React from 'react';
import { Skeleton } from 'antd';

const ImageSkeletonLoader = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Skeleton.Image />
    </div>
  );
};

export default ImageSkeletonLoader;
