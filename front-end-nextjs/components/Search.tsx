import { Input, Grid } from "@nextui-org/react";
export default function Search() {
  return (
    <Grid.Container gap={4}>
      <Grid>
        <Input clearable bordered color="secondary" status="secondary" placeholder="Search" />
      </Grid>
    </Grid.Container>
  );
}