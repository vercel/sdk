# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/jobproject.js";

let value: OneHundredAndFortyTwo = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
    },
    name: "<value>",
    url: "https://understated-slipper.name/",
  },
  deploymentId: "<id>",
  url: "https://orderly-best-seller.com",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload142Deployment](../models/usereventpayload142deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |