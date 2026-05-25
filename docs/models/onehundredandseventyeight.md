# OneHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyEight } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: OneHundredAndSeventyEight = {
  next: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "mastercard",
  },
  previous: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "discover",
  },
  projectId: "<id>",
  projectName: "<value>",
  updates: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `next`                                                                   | [models.UserEventPayloadNext](../models/usereventpayloadnext.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updates`                                                                | [models.Updates](../models/updates.md)[]                                 | :heavy_check_mark:                                                       | N/A                                                                      |