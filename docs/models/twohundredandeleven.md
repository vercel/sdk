# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/querytype.js";

let value: TwoHundredAndEleven = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
  previousEndpoint: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `privateLinkEndpoint`                                                        | [models.PayloadPrivateLinkEndpoint](../models/payloadprivatelinkendpoint.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `previousEndpoint`                                                           | [models.PreviousEndpoint](../models/previousendpoint.md)                     | :heavy_check_mark:                                                           | N/A                                                                          |