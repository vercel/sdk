# UpdateDrainFilterV22

## Example Usage

```typescript
import { UpdateDrainFilterV22 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainFilterV22 = {
  version: "v2",
  filter: {
    type: "odata",
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `version`                                                                                | [models.UpdateDrainFilterV2DrainsVersion](../models/updatedrainfilterv2drainsversion.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `filter`                                                                                 | *models.UpdateDrainFilterV2Filter*                                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |