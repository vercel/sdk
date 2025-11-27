# FortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySix } from "@vercel/sdk/models/userevent.js";

let value: FortySix = {
  deployment: {
    id: "<id>",
    name: "<value>",
    url: "https://instructive-lid.com",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
  deploymentId: "<id>",
  url: "https://hungry-jogging.info",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `deployment`                                                                 | [models.UserEventPayloadDeployment](../models/usereventpayloaddeployment.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `deploymentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |