'use client';
import { Progress, Grid } from "@nextui-org/react";

export default function Loader() {
  return (
    <Grid.Container xs={12} sm={6} gap={2}>
      <Grid>
        <Progress
          indeterminated
          value={50}
          color="gradient"
          status="secondary"
          />
      </Grid>
    </Grid.Container>
  );
}