# ProjectAccess2

## Example Usage

```typescript
import { ProjectAccess2 } from "@vercel/sdk/models/createdrainop.js";

let value: ProjectAccess2 = {
  access: "some",
  projectIds: [
    "<value 1>",
  ],
  managedBy: "drain",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `access`                                                             | *"some"*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectIds`                                                         | *string*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `managedBy`                                                          | [models.ProjectAccessManagedBy](../models/projectaccessmanagedby.md) | :heavy_check_mark:                                                   | N/A                                                                  |