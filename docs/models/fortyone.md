# FortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyOne } from "@vercel/sdk/models/userevent.js";

let value: FortyOne = {
  deployment: {
    id: "<id>",
    name: "<value>",
    url: "https://upbeat-design.biz",
    meta: {
      "key": "<value>",
    },
  },
  deploymentId: "<id>",
  url: "https://greedy-publicity.com",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `deployment`                                                                 | [models.UserEventPayloadDeployment](../models/usereventpayloaddeployment.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `deploymentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |