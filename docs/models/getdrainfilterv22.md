# GetDrainFilterV22

## Example Usage

```typescript
import { GetDrainFilterV22 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainFilterV22 = {
  version: "v2",
  filter: {
    type: "odata",
    text: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `version`                                                                          | [models.GetDrainFilterV2DrainsVersion](../models/getdrainfilterv2drainsversion.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `filter`                                                                           | *models.GetDrainFilterV2Filter*                                                    | :heavy_check_mark:                                                                 | N/A                                                                                |