# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndEleven = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  peering: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `team`                                                                                   | [models.UserEventPayload211Team](../models/usereventpayload211team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configuration`                                                                          | [models.UserEventPayload211Configuration](../models/usereventpayload211configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.PayloadPeering](../models/payloadpeering.md)                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |