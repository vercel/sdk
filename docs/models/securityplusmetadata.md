# SecurityPlusMetadata

## Example Usage

```typescript
import { SecurityPlusMetadata } from "@vercel/sdk/models/flatratetier.js";

let value: SecurityPlusMetadata = {
  updatedAt: 6502.75,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `updatedAt`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `firstEnabledAt`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | Timestamp when the feature was first enabled. Never changes after initial enablement. |