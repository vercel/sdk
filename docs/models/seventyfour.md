# SeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFour } from "@vercel/sdk/models/userevent.js";

let value: SeventyFour = {
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