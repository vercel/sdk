# TwoHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyNine } from "@vercel/sdk/models/twohundredandfortyfive.js";

let value: TwoHundredAndEightyNine = {
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
| `scope`                                                                      | [models.UserEventPayload289Scope](../models/usereventpayload289scope.md)     | :heavy_minus_sign:                                                           | N/A                                                                          |