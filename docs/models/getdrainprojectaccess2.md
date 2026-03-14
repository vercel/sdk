# GetDrainProjectAccess2

## Example Usage

```typescript
import { GetDrainProjectAccess2 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainProjectAccess2 = {
  access: "some",
  projectIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  managedBy: "integration",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `access`                                                                                         | *"some"*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `projectIds`                                                                                     | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `managedBy`                                                                                      | [models.GetDrainProjectAccessDrainsManagedBy](../models/getdrainprojectaccessdrainsmanagedby.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |