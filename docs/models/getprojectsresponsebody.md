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
      nodeVersion: "20.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
          "<value 2>",
        ],
      },
      defaultResourceConfig: {
        functionDefaultRegions: [
          "<value 1>",
          "<value 2>",
        ],
      },
      targets: {
        "key": {
          id: "<id>",
          createdAt: 2773.26,
          createdIn: "<value>",
          creator: {
            email: "Nestor_Osinski-Sporer62@hotmail.com",
            uid: "<id>",
            username: "Jaquan14",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "hobby",
          previewCommentsEnabled: false,
          private: true,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://quixotic-thongs.org/",
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