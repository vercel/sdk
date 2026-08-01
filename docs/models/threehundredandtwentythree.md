# ThreeHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyThree } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndTwentyThree = {
  id: "<id>",
  type: "edge-config",
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
| `type`                                                                 | [models.UserEventPayload323Type](../models/usereventpayload323type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `access`                                                               | [models.Access](../models/access.md)                                   | :heavy_minus_sign:                                                     | N/A                                                                    |