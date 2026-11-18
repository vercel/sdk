# FiveHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndTwentyThree = {
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
| `configuration`                                                                          | [models.UserEventPayload523Configuration](../models/usereventpayload523configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.Peering](../models/peering.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload523Team](../models/usereventpayload523team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |