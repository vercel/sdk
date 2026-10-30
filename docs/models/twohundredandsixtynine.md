# TwoHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyNine } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: TwoHundredAndSixtyNine = {
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
| `scope`                                                                  | [models.UserEventPayload269Scope](../models/usereventpayload269scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |