import { Input, Grid } from "@nextui-org/react";

export default function Search() {
  return (
    <Grid.Container gap={4}>
      <Grid>
        <Input 
          placeholder="Let's Search"
          status="secondary"
        />
      </Grid>
    </Grid.Container>
  );
}