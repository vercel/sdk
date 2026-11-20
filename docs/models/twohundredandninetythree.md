# TwoHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyThree } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: TwoHundredAndNinetyThree = {
  previousEndpoint: {
    name: "<value>",
  },
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `previousEndpoint`                                                                             | [models.PreviousEndpoint](../models/previousendpoint.md)                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `privateLinkEndpoint`                                                                          | [models.UserEventPayloadPrivateLinkEndpoint](../models/usereventpayloadprivatelinkendpoint.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `projectName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `scope`                                                                                        | [models.UserEventPayload293Scope](../models/usereventpayload293scope.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |