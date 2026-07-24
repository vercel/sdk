# GetStorageStoresByIdStore

## Example Usage

```typescript
import { GetStorageStoresByIdStore } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdStore = {
  projectsMetadata: [
    {
      id: "<id>",
      projectId: "<id>",
      name: "<value>",
      environments: [
        "<value 1>",
      ],
      envVarPrefix: "<value>",
      environmentVariables: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
  usageQuotaExceeded: false,
  status: "limits-exceeded-suspended-store-count",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectsMetadata`                                                                                 | [models.GetStorageStoresByIdProjectsMetadata](../models/getstoragestoresbyidprojectsmetadata.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectFilter`                                                                                    | [models.ProjectFilter](../models/projectfilter.md)                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `totalConnectedProjects`                                                                           | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `usageQuotaExceeded`                                                                               | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.GetStorageStoresByIdStatus](../models/getstoragestoresbyidstatus.md)                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |