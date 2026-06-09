# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndSeventyEight = {
  id: "<id>",
  type: "postgres",
  locked: true,
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
| `type`                                                                 | [models.UserEventPayload278Type](../models/usereventpayload278type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `access`                                                               | [models.PayloadAccess](../models/payloadaccess.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `locked`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |