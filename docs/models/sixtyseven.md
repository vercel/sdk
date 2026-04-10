# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/payloadoldteam.js";

let value: SixtySeven = {
  url: "https://parched-peony.org",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `alias`                                                                      | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `target`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `deployment`                                                                 | [models.UserEventPayloadDeployment](../models/usereventpayloaddeployment.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `forced`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `deploymentId`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `plan`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `project`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `regions`                                                                    | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |