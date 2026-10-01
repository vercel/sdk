# ListVercelCiBranchesResponseBody

Successfully listed Vercel CI branch suggestions.

## Example Usage

```typescript
import { ListVercelCiBranchesResponseBody } from "@vercel/sdk/models/listvercelcibranchesop.js";

let value: ListVercelCiBranchesResponseBody = {
  branches: [
    {
      name: "<value>",
      count: 6949.43,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `branches`                                 | [models.Branches](../models/branches.md)[] | :heavy_check_mark:                         | N/A                                        |