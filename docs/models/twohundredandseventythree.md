# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndSeventyThree = {
  endpoint: {
    awsServiceName: "<value>",
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    vercelRegion: "<value>",
  },
  scope: "network",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `endpoint`                                                               | [models.Endpoint](../models/endpoint.md)                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `networkName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload273Scope](../models/usereventpayload273scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |