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
        enabledAt: 9627.70,
        disabledAt: 168.72,
        updatedAt: 6964.82,
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
          createdAt: 8136.79,
          createdIn: "<value>",
          creator: {
            email: "Estella51@yahoo.com",
            uid: "<id>",
            username: "Aubrey_Jenkins",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "CANCELED",
          type: "LAMBDAS",
          url: "https://meager-topsail.name",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "8.10.x",
      targets: {
        "key": {
          id: "<id>",
          createdAt: 8298.97,
          createdIn: "<value>",
          creator: {
            email: "Tevin.Daniel95@hotmail.com",
            uid: "<id>",
            username: "Carole_King",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "enterprise",
          previewCommentsEnabled: false,
          private: false,
          readyState: "BUILDING",
          type: "LAMBDAS",
          url: "https://experienced-antelope.com",
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