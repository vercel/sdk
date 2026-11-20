# FiveHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyNine } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyNine = {
  configuration: {
    id: "<id>",
  },
  peering: {
    accountId: "<id>",
    id: "<id>",
    region: "<value>",
    vpcId: "<id>",
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
| `configuration`                                                                          | [models.UserEventPayload529Configuration](../models/usereventpayload529configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload529Team](../models/usereventpayload529team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |