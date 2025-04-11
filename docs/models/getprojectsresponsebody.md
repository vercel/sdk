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
        enabledAt: 8591.13,
        disabledAt: 6356.32,
        updatedAt: 1609.95,
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
          createdAt: 2186.2,
          createdIn: "<value>",
          creator: {
            email: "Luciano.Lueilwitz68@yahoo.com",
            uid: "<id>",
            username: "Kattie79",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "READY",
          type: "LAMBDAS",
          url: "https://alive-moment.name/",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "20.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value>",
        ],
      },
      defaultResourceConfig: {
        functionDefaultRegions: [
          "<value>",
        ],
      },
      targets: {
        "key": {
          id: "<id>",
          createdAt: 1603.18,
          createdIn: "<value>",
          creator: {
            email: "Bridie18@gmail.com",
            uid: "<id>",
            username: "Izaiah_Hayes93",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "hobby",
          previewCommentsEnabled: false,
          private: false,
          readyState: "BUILDING",
          type: "LAMBDAS",
          url: "https://suburban-calculus.name",
          userId: "<id>",
        },
      },
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projects`                                                                                                                                                      | [models.GetProjectsProjects](../models/getprojectsprojects.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |