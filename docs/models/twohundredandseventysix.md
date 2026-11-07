# TwoHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySix } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndSeventySix = {
  current: {
    awsServiceName: "<value>",
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    vercelRegion: "<value>",
  },
  prev: {
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
| `current`                                                                | [models.Current](../models/current.md)                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `networkName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `prev`                                                                   | [models.UserEventPayloadPrev](../models/usereventpayloadprev.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload276Scope](../models/usereventpayload276scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |