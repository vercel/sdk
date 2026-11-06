# TwoHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload217provider.js";

let value: TwoHundredAndThirtyThree = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [],
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