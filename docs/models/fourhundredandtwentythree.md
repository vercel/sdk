# FourHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyThree } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndTwentyThree = {
  id: "<id>",
  type: "edge-config",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `access`                                                               | [models.Access](../models/access.md)                                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `computeUnitsMax`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `computeUnitsMin`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `suspendTimeoutSeconds`                                                | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload423Type](../models/usereventpayload423type.md) | :heavy_check_mark:                                                     | N/A                                                                    |