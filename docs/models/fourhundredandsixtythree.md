# FourHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyThree } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndSixtyThree = {
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
| `configuration`                                                                          | [models.UserEventPayload463Configuration](../models/usereventpayload463configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.UserEventPayloadPeering](../models/usereventpayloadpeering.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload463Team](../models/usereventpayload463team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |