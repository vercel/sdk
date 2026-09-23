# FourHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyThree } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: FourHundredAndFiftyThree = {
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
| `configuration`                                                                          | [models.UserEventPayload453Configuration](../models/usereventpayload453configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload453Team](../models/usereventpayload453team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |