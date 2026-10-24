# OneHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyEight } from "@vercel/sdk/models/usereventjobpayload125nsnbsideeffect.js";

let value: OneHundredAndTwentyEight = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
    },
    name: "<value>",
    url: "https://gigantic-glider.com/",
  },
  deploymentId: "<id>",
  url: "https://frizzy-interior.net",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload128Deployment](../models/usereventpayload128deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |