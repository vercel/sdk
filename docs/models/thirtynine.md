# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/userevent.js";

let value: ThirtyNine = {
  deployment: {
    id: "<id>",
    name: "<value>",
    url: "https://handy-negotiation.org/",
    meta: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  deploymentId: "<id>",
  url: "https://inborn-doorpost.name/",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `deployment`                                                                 | [models.UserEventPayloadDeployment](../models/usereventpayloaddeployment.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `deploymentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |