# GetSandboxesV1ResponseBody

The list of sandboxes matching the request filters.

## Example Usage

```typescript
import { GetSandboxesV1ResponseBody } from "@vercel/sdk/models/getsandboxesv1op.js";

let value: GetSandboxesV1ResponseBody = {
  sandboxes: [],
  pagination: {
    total: 2616.92,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sandboxes`                                                              | [models.Sandbox](../models/sandbox.md)[]                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.GetSandboxesV1Pagination](../models/getsandboxesv1pagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |