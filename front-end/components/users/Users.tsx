import { User, Popover } from "@nextui-org/react";
import { UserCard } from './UserCard';

export default function Users() {
    return (
      <Popover >
        <Popover.Trigger>
          <User
            bordered
            pointer
            zoomed
            size="lg"
            color="gradient"
            as="button"
            src="../me.png"
            name="wonyongjae"
            description="Chobo coder"
          />
        </Popover.Trigger>
        <Popover.Content css={{ px: '$4', py: '$2' }}>
          <UserCard />
        </Popover.Content>
      </Popover>
    );
  }