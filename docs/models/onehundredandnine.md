# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/onehundredandtwo.js";

let value: OneHundredAndNine = {
  deployment: {
    id: "<id>",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
    name: "<value>",
    url: "https://incomparable-hose.name",
  },
  deploymentId: "<id>",
  url: "https://crafty-agreement.biz/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deployment`                                                                       | [models.UserEventPayload109Deployment](../models/usereventpayload109deployment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deploymentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |