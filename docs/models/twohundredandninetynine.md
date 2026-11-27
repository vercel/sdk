# TwoHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: TwoHundredAndNinetyNine = {
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
| `prev`                                                                   | [models.UserEventPayload299Prev](../models/usereventpayload299prev.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload299Scope](../models/usereventpayload299scope.md) | :heavy_minus_sign:                                                       | N/A                                                                      |