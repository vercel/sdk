# Integration

## Example Usage

```typescript
import { Integration } from "@vercel/sdk/models/getconfigurationsop.js";

let value: Integration = {
  name: "<value>",
  icon: "<value>",
  isLegacy: false,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `name`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `icon`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isLegacy`                             | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `flags`                                | *string*[]                             | :heavy_minus_sign:                     | N/A                                    |
| `assignedBetaLabelAt`                  | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `tagIds`                               | [models.TagIds](../models/tagids.md)[] | :heavy_minus_sign:                     | N/A                                    |