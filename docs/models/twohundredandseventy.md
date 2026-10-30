# TwoHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventy } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: TwoHundredAndSeventy = {
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
| `prev`                                                                   | [models.UserEventPayload270Prev](../models/usereventpayload270prev.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload270Scope](../models/usereventpayload270scope.md) | :heavy_minus_sign:                                                       | N/A                                                                      |