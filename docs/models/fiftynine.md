# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/payloadrule.js";

let value: FiftyNine = {
  projectId: "<id>",
  attackModeEnabled: false,
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