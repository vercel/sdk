# TwoHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFive } from "@vercel/sdk/models/onehundredandseventytwo.js";

let value: TwoHundredAndTwentyFive = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    organizationPermissions: [
      "OrgAdmin",
    ],
    teamRoles: [
      "SECURITY",
    ],
    teams: {},
  },
  organizationId: "<id>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `directoryGroupId`                             | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `directoryId`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `groupName`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `next`                                         | [models.PayloadNext](../models/payloadnext.md) | :heavy_check_mark:                             | N/A                                            |
| `organizationId`                               | *string*                                       | :heavy_check_mark:                             | N/A                                            |