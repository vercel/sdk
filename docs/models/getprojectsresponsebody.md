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
        enabledAt: 9805.81,
        disabledAt: 8717.86,
        updatedAt: 5027.21,
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
          createdAt: 9223.48,
          createdIn: "<value>",
          creator: {
            email: "Theresia_Wisoky3@yahoo.com",
            uid: "<id>",
            username: "Gillian44",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://blushing-possession.biz/",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "22.x",
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
          createdAt: 599.44,
          createdIn: "<value>",
          creator: {
            email: "Sydney_Treutel52@gmail.com",
            uid: "<id>",
            username: "Zoe.Kovacek97",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "READY",
          type: "LAMBDAS",
          url: "https://phony-intervention.biz/",
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