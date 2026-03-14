# GetDrainsProjectAccess2

## Example Usage

```typescript
import { GetDrainsProjectAccess2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsProjectAccess2 = {
  access: "some",
  projectIds: [
    "<value 1>",
  ],
  managedBy: "integration",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `access`                                                                                           | *"some"*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectIds`                                                                                       | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `managedBy`                                                                                        | [models.GetDrainsProjectAccessDrainsManagedBy](../models/getdrainsprojectaccessdrainsmanagedby.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |