# ThreeHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyThree } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndFortyThree = {
  id: "<id>",
  type: "redis",
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
| `type`                                                                 | [models.UserEventPayload343Type](../models/usereventpayload343type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `access`                                                               | [models.Access](../models/access.md)                                   | :heavy_minus_sign:                                                     | N/A                                                                    |