# CreateFlagFeatureFlagsVariants

## Example Usage

```typescript
import { CreateFlagFeatureFlagsVariants } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsVariants = {
  id: "<id>",
  value: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `description`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `label`                  | *string*                 | :heavy_minus_sign:       | N/A                      |
| `value`                  | *models.CreateFlagValue* | :heavy_check_mark:       | N/A                      |