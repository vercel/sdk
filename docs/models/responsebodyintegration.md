# ResponseBodyIntegration

## Example Usage

```typescript
import { ResponseBodyIntegration } from "@vercel/sdk/models/getconfigurationsop.js";

let value: ResponseBodyIntegration = {
  icon: "<value>",
  isLegacy: true,
  name: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `assignedBetaLabelAt`                  | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `flags`                                | *string*[]                             | :heavy_minus_sign:                     | N/A                                    |
| `icon`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isLegacy`                             | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `name`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `tagIds`                               | [models.TagIds](../models/tagids.md)[] | :heavy_minus_sign:                     | N/A                                    |