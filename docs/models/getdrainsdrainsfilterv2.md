# GetDrainsDrainsFilterV2

## Example Usage

```typescript
import { GetDrainsDrainsFilterV2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDrainsFilterV2 = {
  version: "v2",
  filter: {
    type: "odata",
    text: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `version`                                                            | [models.GetDrainsDrainsVersion](../models/getdrainsdrainsversion.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `filter`                                                             | *models.GetDrainsDrainsFilter*                                       | :heavy_check_mark:                                                   | N/A                                                                  |