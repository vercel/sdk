# ThreeHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventeen } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: ThreeHundredAndSeventeen = {
  id: "<id>",
  type: "blob",
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
| `type`                                                                 | [models.UserEventPayload317Type](../models/usereventpayload317type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `access`                                                               | [models.Access](../models/access.md)                                   | :heavy_minus_sign:                                                     | N/A                                                                    |