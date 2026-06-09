# Filter

## Example Usage

```typescript
import { Filter } from "@vercel/sdk/models/createdrainop.js";

let value: Filter = {
  version: "<value>",
  filter: {
    type: "<value>",
    text: "<value>",
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `version`                  | *string*                   | :heavy_check_mark:         | N/A                        |
| `filter`                   | *models.CreateDrainFilter* | :heavy_check_mark:         | N/A                        |