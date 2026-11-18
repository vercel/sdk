# TwoHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySeven } from "@vercel/sdk/models/twohundredandfortyfive.js";

let value: TwoHundredAndEightySeven = {
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
| `scope`                                                                  | [models.UserEventPayload287Scope](../models/usereventpayload287scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |