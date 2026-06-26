# TwoHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySeven } from "@vercel/sdk/models/rollbackdescription.js";

let value: TwoHundredAndNinetySeven = {
  id: "<id>",
  type: "edge-config",
  locked: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `computeUnitsMax`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `computeUnitsMin`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `suspendTimeoutSeconds`                                                | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload297Type](../models/usereventpayload297type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `access`                                                               | [models.PayloadAccess](../models/payloadaccess.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `locked`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |