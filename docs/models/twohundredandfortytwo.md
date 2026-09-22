# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/twohundredandfourteen.js";

let value: TwoHundredAndFortyTwo = {
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