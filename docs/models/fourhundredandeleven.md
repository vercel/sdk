# FourHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEleven } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundredAndEleven = {
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
| `team`                                                                                   | [models.UserEventPayload411Team](../models/usereventpayload411team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configuration`                                                                          | [models.UserEventPayload411Configuration](../models/usereventpayload411configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `peering`                                                                                | [models.UserEventPayloadPeering](../models/usereventpayloadpeering.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |