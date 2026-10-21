# FourHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighty } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndEighty = {
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
| `configuration`                                                                          | [models.UserEventPayload480Configuration](../models/usereventpayload480configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload480Team](../models/usereventpayload480team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |