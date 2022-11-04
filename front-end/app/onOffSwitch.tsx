'use client';
import { Grid, Switch } from "@nextui-org/react";
import { On } from './on';
import { Off } from './off';

export default function OnOffSwitch() {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Switch
          checked={true}
          size="xl"
          color="secondary"
          iconOn={<On filled />}
          iconOff={<Off filled />}
        />
      </Grid>
    </Grid.Container>
  );
}
