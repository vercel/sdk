# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/usereventpayload172newownerfeatureblocksvcrblockreason.js";

let value: TwoHundredAndSix = {
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