# TwoHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndSixtySeven = {
  id: "<id>",
  type: "blob",
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
| `type`                                                                 | [models.UserEventPayload267Type](../models/usereventpayload267type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `access`                                                               | [models.PayloadAccess](../models/payloadaccess.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `locked`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |