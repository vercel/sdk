# AccountUpdateContext

Context for the Update Account screen. Present only when `isAccountUpdateRequired` is true. `managedTeams` is empty for orphan mode (user matches an EMU domain but is not on the team).

## Example Usage

```typescript
import { AccountUpdateContext } from "@vercel/sdk/models/authuser.js";

let value: AccountUpdateContext = {
  canOptOut: false,
  managedTeams: [],
  verifiedEmuDomains: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `canOptOut`                                                      | *boolean*                                                        | :heavy_check_mark:                                               | Whether this user can cancel their optional Account Update flow. |
| `organization`                                                   | [models.Organization](../models/organization.md)                 | :heavy_minus_sign:                                               | N/A                                                              |
| `managedTeams`                                                   | [models.ManagedTeams](../models/managedteams.md)[]               | :heavy_check_mark:                                               | N/A                                                              |
| `verifiedEmuDomains`                                             | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              |