# UpdateFlagFeatureFlagsVariants

## Example Usage

```typescript
import { UpdateFlagFeatureFlagsVariants } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFeatureFlagsVariants = {
  id: "<id>",
  value: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `description`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `label`                  | *string*                 | :heavy_minus_sign:       | N/A                      |
| `value`                  | *models.UpdateFlagValue* | :heavy_check_mark:       | N/A                      |