# TwoHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyThree } from "@vercel/sdk/models/usereventpayload252previousdeploymenttype.js";

let value: TwoHundredAndSixtyThree = {
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
| `prev`                                                                   | [models.UserEventPayload263Prev](../models/usereventpayload263prev.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload263Scope](../models/usereventpayload263scope.md) | :heavy_minus_sign:                                                       | N/A                                                                      |