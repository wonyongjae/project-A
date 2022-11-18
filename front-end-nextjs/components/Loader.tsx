'use client';
import { Progress, Grid } from "@nextui-org/react";

export default function Loader() {
  return <Progress
          indeterminated
          value={50}
          color="gradient"
          status="secondary"
          />
}