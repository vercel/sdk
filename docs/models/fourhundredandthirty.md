# FourHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirty } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndThirty = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
    accountId: "<id>",
    region: "<value>",
    vpcId: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `team`                                                                                   | [models.UserEventPayload430Team](../models/usereventpayload430team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configuration`                                                                          | [models.UserEventPayload430Configuration](../models/usereventpayload430configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |