import { Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const LoadingTodos = () => {
  return (
    <Stack gap="20px">
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
      <Skeleton variant="rectangular" width="100%" height="52px"></Skeleton>
    </Stack>
  );
};

export default LoadingTodos;
