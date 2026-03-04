# SixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyNine } from "@vercel/sdk/models/userevent.js";

let value: SixtyNine = {
  deployment: {
    id: "<id>",
    name: "<value>",
    meta: {
      "key": "<value>",
    },
    url: "https://obedient-sightseeing.com/",
  },
  deploymentId: "<id>",
  url: "https://drab-dash.biz",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `deployment`                                                                 | [models.UserEventPayloadDeployment](../models/usereventpayloaddeployment.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `deploymentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |