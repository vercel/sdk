# CreateDrainFilterV22

## Example Usage

```typescript
import { CreateDrainFilterV22 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainFilterV22 = {
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
| `version`                                                                                | [models.CreateDrainFilterV2DrainsVersion](../models/createdrainfilterv2drainsversion.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `filter`                                                                                 | *models.CreateDrainFilterV2Filter*                                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |