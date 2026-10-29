# AccountUpdateContext

Context for the Update Account screen. Present only when `isAccountUpdateRequired` is true. `managedTeams` is empty for orphan mode (user matches an EMU domain but is not on the team). When the teams the user must complete Update Account for include an organization's backing team, that team is listed as the organization, followed by the organization's Enterprise Managed root and child teams the user is a member of, including through Directory Sync group mappings.

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
| `managedTeams`                                                   | [models.ManagedTeams](../models/managedteams.md)[]               | :heavy_check_mark:                                               | N/A                                                              |
| `organization`                                                   | [models.AuthUserOrganization](../models/authuserorganization.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `verifiedEmuDomains`                                             | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              |