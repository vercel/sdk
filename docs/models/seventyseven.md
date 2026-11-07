# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/rule.js";

let value: SeventySeven = {
  attackModeEnabled: true,
  projectId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `attackModeActiveUntil`     | *number*                    | :heavy_minus_sign:          | N/A                         |
| `attackModeEnabled`         | *boolean*                   | :heavy_check_mark:          | N/A                         |
| `prevAttackModeActiveUntil` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `prevAttackModeEnabled`     | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `projectId`                 | *string*                    | :heavy_check_mark:          | N/A                         |