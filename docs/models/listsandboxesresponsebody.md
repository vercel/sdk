# ListSandboxesResponseBody

The list of sandboxes matching the request filters.

## Example Usage

```typescript
import { ListSandboxesResponseBody } from "@vercel/sdk/models/listsandboxesop.js";

let value: ListSandboxesResponseBody = {
  sandboxes: [],
  pagination: {
    total: 6179.2,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sandboxes`                                                            | [models.Sandbox](../models/sandbox.md)[]                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [models.ListSandboxesPagination](../models/listsandboxespagination.md) | :heavy_check_mark:                                                     | N/A                                                                    |