# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/bandwidth.js";

let value: OneHundredAndNinetyNine = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  groupName: "<value>",
  next: {
    roles: {},
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