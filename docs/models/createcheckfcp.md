# CreateCheckFCP

## Example Usage

```typescript
import { CreateCheckFCP } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckFCP = {
  source: "web-vitals",
  value: 1406.19,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `previousValue`                                                        | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `source`                                                               | [models.CreateCheckChecksSource](../models/createcheckcheckssource.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `value`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |