# OneHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyThree } from "@vercel/sdk/models/usereventjobpayload1405provider.js";

let value: OneHundredAndFortyThree = {
  deployment: {
    id: "<id>",
    meta: {},
    name: "<value>",
    url: "https://bare-adult.net/",
  },
  deploymentId: "<id>",
  url: "https://jittery-redesign.org/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload143Deployment](../models/usereventpayload143deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |