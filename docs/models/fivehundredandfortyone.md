# FiveHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyOne } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyOne = {
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configuration`                                                                          | [models.UserEventPayload541Configuration](../models/usereventpayload541configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.UserEventPayloadPeering](../models/usereventpayloadpeering.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload541Team](../models/usereventpayload541team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |