# FilterV22

## Example Usage

```typescript
import { FilterV22 } from "@vercel/sdk/models/createdrainop.js";

let value: FilterV22 = {
  version: "v2",
  filter: {
    type: "odata",
    text: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `version`                                              | [models.FilterV2Version](../models/filterv2version.md) | :heavy_check_mark:                                     | N/A                                                    |
| `filter`                                               | *models.FilterV2Filter*                                | :heavy_check_mark:                                     | N/A                                                    |