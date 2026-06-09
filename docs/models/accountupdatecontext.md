# AccountUpdateContext

Context for the Update Account screen. Present only when `isAccountUpdateRequired` is true. `managedTeams` is empty for orphan mode (user matches an EMU domain but is not on the team).

## Example Usage

```typescript
import { AccountUpdateContext } from "@vercel/sdk/models/authuser.js";

let value: AccountUpdateContext = {
  managedTeams: [
    {
      name: "<value>",
      avatar: "https://picsum.photos/seed/LVlcN5/730/649",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `managedTeams`                                     | [models.ManagedTeams](../models/managedteams.md)[] | :heavy_check_mark:                                 | N/A                                                |