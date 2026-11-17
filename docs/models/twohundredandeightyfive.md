# TwoHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFive } from "@vercel/sdk/models/usereventpayload238prevproject.js";

let value: TwoHundredAndEightyFive = {
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
| `scope`                                                                      | [models.UserEventPayload285Scope](../models/usereventpayload285scope.md)     | :heavy_minus_sign:                                                           | N/A                                                                          |