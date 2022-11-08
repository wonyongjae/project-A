import { Input, Grid } from "@nextui-org/react";

type Colors = "default" | "primary" | "secondary" | "success" | "warning" | "error" | any;

export default function SearchBar({color}:Colors) {
  return (
    <Grid.Container gap={4}>
      <Grid>
        <Input 
          placeholder="Let's Search"
          status={color}
        />
      </Grid>
    </Grid.Container>
  );
}