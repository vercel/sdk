# OneHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySix } from "@vercel/sdk/models/payloaddefaultpurchasetype.js";

let value: OneHundredAndFiftySix = {
  next: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "mastercard",
  },
  previous: {
    clientId: "<id>",
    deploymentType: "<value>",
    issuer: "jcb",
  },
  projectId: "<id>",
  projectName: "<value>",
  updates: [
    "deploymentType",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `next`                                                 | [models.PayloadNext](../models/payloadnext.md)         | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectName`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `updates`                                              | [models.Updates](../models/updates.md)[]               | :heavy_check_mark:                                     | N/A                                                    |