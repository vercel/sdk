# ListDrivesV1ResponseBody

## Example Usage

```typescript
import { ListDrivesV1ResponseBody } from "@vercel/sdk/models/listdrivesv1op.js";

let value: ListDrivesV1ResponseBody = {
  drives: [],
  pagination: {
    count: 7681.36,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `drives`                                                             | [models.Drive](../models/drive.md)[]                                 | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.ListDrivesV1Pagination](../models/listdrivesv1pagination.md) | :heavy_check_mark:                                                   | N/A                                                                  |