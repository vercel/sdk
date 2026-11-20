# TwoHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyEight } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: TwoHundredAndEightyEight = {
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
| `scope`                                                                  | [models.UserEventPayload288Scope](../models/usereventpayload288scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |