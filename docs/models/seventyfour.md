# SeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFour } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: SeventyFour = {
  attackModeEnabled: false,
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