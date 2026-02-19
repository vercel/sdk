# GetProjectsResponseBody3

## Example Usage

```typescript
import { GetProjectsResponseBody3 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBody3 = {
  projects: [
    {
      accountId: "<id>",
      crons: {
        enabledAt: 8563.1,
        disabledAt: 3810.36,
        updatedAt: 6364.7,
        deploymentId: "<id>",
        definitions: [],
      },
      deploymentExpiration: {},
      directoryListing: true,
      id: "<id>",
      name: "<value>",
      nodeVersion: "10.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
        ],
      },
      rollingRelease: {
        target: "production",
        stages: [
          {
            targetPercentage: 25,
            requireApproval: false,
            duration: 600,
            linearShift: false,
          },
        ],
        canaryResponseHeader: false,
      },
      defaultResourceConfig: {
        functionDefaultRegions: [],
      },
    },
  ],
  pagination: {
    count: 20,
    next: "JBSWY3DPEHPK3PXP",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projects`                                                                               | [models.GetProjectsResponseBodyProjects](../models/getprojectsresponsebodyprojects.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | *models.GetProjectsResponseBodyProjectsPagination*                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |