# TwoHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFive } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: TwoHundredAndSeventyFive = {
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
| `scope`                                                                                        | [models.UserEventPayload275Scope](../models/usereventpayload275scope.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |