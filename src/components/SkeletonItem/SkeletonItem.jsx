import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

export const SkeletonItem = () => {
  return (
    <Stack>
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
    </Stack>
  );
};
