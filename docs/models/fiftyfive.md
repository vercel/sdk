# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/oldteam.js";

let value: FiftyFive = {
  deployment: {
    id: "<id>",
    name: "<value>",
    url: "https://afraid-whack.com/",
    meta: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
  deploymentId: "<id>",
  url: "https://sad-innovation.biz/",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `deployment`                                                                 | [models.UserEventPayloadDeployment](../models/usereventpayloaddeployment.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `deploymentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |