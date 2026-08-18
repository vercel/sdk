# OneHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFive } from "@vercel/sdk/models/onehundredandninetythree.js";

let value: OneHundredAndNinetyFive = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {
      "key": "SECURITY",
    },
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