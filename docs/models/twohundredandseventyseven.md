# TwoHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySeven } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndSeventySeven = {
  current: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
  prev: {
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
| `current`                                                                | [models.PayloadCurrent](../models/payloadcurrent.md)                     | :heavy_check_mark:                                                       | N/A                                                                      |
| `prev`                                                                   | [models.UserEventPayload277Prev](../models/usereventpayload277prev.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload277Scope](../models/usereventpayload277scope.md) | :heavy_minus_sign:                                                       | N/A                                                                      |