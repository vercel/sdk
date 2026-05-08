# ThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyEight } from "@vercel/sdk/models/usereventpayload34afterresourcestype.js";

let value: ThirtyEight = {
  projectId: "<id>",
  attackModeEnabled: true,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectId`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `prevAttackModeEnabled`     | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `prevAttackModeActiveUntil` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `attackModeEnabled`         | *boolean*                   | :heavy_check_mark:          | N/A                         |
| `attackModeActiveUntil`     | *number*                    | :heavy_minus_sign:          | N/A                         |