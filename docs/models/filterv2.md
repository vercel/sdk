# FilterV2

## Example Usage

```typescript
import { FilterV2 } from "@vercel/sdk/models/createdrainop.js";

let value: FilterV2 = {
  version: "v2",
  filter: {
    type: "basic",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `version`                                                                            | [models.CreateDrainResponseBodyVersion](../models/createdrainresponsebodyversion.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `filter`                                                                             | *models.ResponseBodyFilter*                                                          | :heavy_check_mark:                                                                   | N/A                                                                                  |