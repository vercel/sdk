# TwoHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFive } from "@vercel/sdk/models/usereventpayload257deploymenttype.js";

let value: TwoHundredAndSixtyFive = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `endpoint`                                                               | [models.PayloadEndpoint](../models/payloadendpoint.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload265Scope](../models/usereventpayload265scope.md) | :heavy_minus_sign:                                                       | N/A                                                                      |