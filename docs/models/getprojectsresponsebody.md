# GetProjectsResponseBody

The paginated list of projects

## Example Usage

```typescript
import { GetProjectsResponseBody } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBody = {
  projects: [
    {
      accountId: "<id>",
      crons: {
        enabledAt: 8873.52,
        disabledAt: null,
        updatedAt: 4201.43,
        deploymentId: "<id>",
        definitions: [
          {
            host: "vercel.com",
            path: "/api/crons/sync-something?hello=world",
            schedule: "0 0 * * *",
          },
        ],
      },
      directoryListing: false,
      id: "<id>",
      latestDeployments: [
        {
          id: "<id>",
          createdAt: 5974.19,
          createdIn: "<value>",
          creator: {
            email: "Tanya.Stanton64@gmail.com",
            uid: "<id>",
            username: "Mary.Murphy24",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "enterprise",
          previewCommentsEnabled: false,
          private: true,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://humiliating-resolve.name",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "22.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
          "<value 2>",
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
      targets: {
        "key": {
          id: "<id>",
          createdAt: 9261.58,
          createdIn: "<value>",
          creator: null,
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "enterprise",
          previewCommentsEnabled: false,
          private: true,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://unselfish-millet.name",
          userId: "<id>",
        },
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projects`                                                       | [models.GetProjectsProjects](../models/getprojectsprojects.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | *models.GetProjectsPagination*                                   | :heavy_check_mark:                                               | N/A                                                              |