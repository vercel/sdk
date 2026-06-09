# ListDrivesResponseBody

## Example Usage

```typescript
import { ListDrivesResponseBody } from "@vercel/sdk/models/listdrivesop.js";

let value: ListDrivesResponseBody = {
  drives: [
    {
      name: "workspace",
      projectId: "prj_abc123",
      maxSizeBytes: 107374182400,
      currentSessionId: "sbx_123",
      currentSandboxName: "my-sandbox",
      createdAt: 1750344501629,
      updatedAt: 1750344501629,
    },
  ],
  pagination: {
    count: 1456.13,
    next: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `drives`                                                         | [models.Drive](../models/drive.md)[]                             | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [models.ListDrivesPagination](../models/listdrivespagination.md) | :heavy_check_mark:                                               | N/A                                                              |