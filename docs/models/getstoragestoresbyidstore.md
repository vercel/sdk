# GetStorageStoresByIdStore

## Example Usage

```typescript
import { GetStorageStoresByIdStore } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdStore = {
  projectsMetadata: [
    {
      environments: [
        "<value 1>",
      ],
      environmentVariables: [
        "<value 1>",
        "<value 2>",
      ],
      envVarPrefix: "<value>",
      id: "<id>",
      name: "<value>",
      projectId: "<id>",
    },
  ],
  status: "limits-exceeded-suspended",
  usageQuotaExceeded: false,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectFilter`                                                                                    | [models.ProjectFilter](../models/projectfilter.md)                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `projectsMetadata`                                                                                 | [models.GetStorageStoresByIdProjectsMetadata](../models/getstoragestoresbyidprojectsmetadata.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.GetStorageStoresByIdStatus](../models/getstoragestoresbyidstatus.md)                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `totalConnectedProjects`                                                                           | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `usageQuotaExceeded`                                                                               | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |