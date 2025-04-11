# GetProjectsProtectionBypass

## Example Usage

```typescript
import { GetProjectsProtectionBypass } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsProtectionBypass = {
  createdAt: 1683.5,
  createdBy: "<value>",
  scope: "automation-bypass",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `createdBy`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `scope`                                                  | [models.GetProjectsScope](../models/getprojectsscope.md) | :heavy_check_mark:                                       | N/A                                                      |