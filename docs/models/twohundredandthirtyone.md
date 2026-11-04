# TwoHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyOne } from "@vercel/sdk/models/twohundredandsix.js";

let value: TwoHundredAndThirtyOne = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [
      "OrgAdmin",
    ],
    teamRoles: [],
    teams: {},
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