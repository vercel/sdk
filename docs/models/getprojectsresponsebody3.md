# GetProjectsResponseBody3

## Example Usage

```typescript
import { GetProjectsResponseBody3 } from "@vercel/sdk/models/getprojectsresponsebodyconsolidatedgitcommitstatus.js";

let value: GetProjectsResponseBody3 = {
  projects: [
    {
      accountId: "<id>",
      alias: [],
      crons: {
        enabledAt: 8858.87,
        disabledAt: 1432.7,
        updatedAt: 4029.67,
        deploymentId: null,
        definitions: [],
      },
      deploymentExpiration: {},
      directoryListing: false,
      id: "<id>",
      latestDeployments: [
        {
          id: "<id>",
          createdAt: 6432.1,
          createdIn: "<value>",
          creator: {
            email: "Annetta_Swift23@gmail.com",
            uid: "<id>",
            username: "Earnestine_OReilly",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "ERROR",
          type: "LAMBDAS",
          url: "https://normal-statue.info",
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
          createdAt: 2108.09,
          createdIn: "<value>",
          creator: {
            email: "Fritz.Streich@hotmail.com",
            uid: "<id>",
            username: "Ashly82",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: true,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://frank-gloom.name/",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projects`                                                                               | [models.GetProjectsResponseBodyProjects](../models/getprojectsresponsebodyprojects.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | *models.GetProjectsResponseBodyProjectsPagination*                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |