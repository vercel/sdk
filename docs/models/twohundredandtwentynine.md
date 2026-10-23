# TwoHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyNine } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: TwoHundredAndTwentyNine = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [
      "OrgAdmin",
    ],
    teamRoles: [
      "DEVELOPER",
    ],
    teams: {
      "key": {
        teamRoles: [],
      },
    },
  },
  organizationId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `directoryGroupId`                                               | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `directoryId`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `groupName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `next`                                                           | [models.UserEventPayloadNext](../models/usereventpayloadnext.md) | :heavy_check_mark:                                               | N/A                                                              |
| `organizationId`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |