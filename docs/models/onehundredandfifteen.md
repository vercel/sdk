# OneHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifteen } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: OneHundredAndFifteen = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    name: "<value>",
    url: "https://winged-advancement.net/",
  },
  deploymentId: "<id>",
  url: "https://noxious-fold.net/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload115Deployment](../models/usereventpayload115deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |