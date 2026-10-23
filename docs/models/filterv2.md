# FilterV2

## Example Usage

```typescript
import { FilterV2 } from "@vercel/sdk/models/getdrainop.js";

let value: FilterV2 = {
  filter: {
    type: "basic",
  },
  version: "v2",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `filter`                                               | *models.GetDrainFilter*                                | :heavy_check_mark:                                     | N/A                                                    |
| `version`                                              | [models.GetDrainVersion](../models/getdrainversion.md) | :heavy_check_mark:                                     | N/A                                                    |