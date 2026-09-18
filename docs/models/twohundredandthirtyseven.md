# TwoHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySeven } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndThirtySeven = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `privateLinkEndpoint`                                                        | [models.PayloadPrivateLinkEndpoint](../models/payloadprivatelinkendpoint.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectName`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |