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
        enabledAt: 6964.83,
        disabledAt: 8136.79,
        updatedAt: 5098.07,
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
          createdAt: 3339.65,
          createdIn: "<value>",
          creator: {
            email: "Avis_Leannon9@hotmail.com",
            uid: "<id>",
            username: "Halle13",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "hobby",
          previewCommentsEnabled: false,
          private: false,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://nautical-traditionalism.net",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "8.10.x",
      targets: {
        "key": {
          id: "<id>",
          createdAt: 9197.83,
          createdIn: "<value>",
          creator: {
            email: "Chandler16@gmail.com",
            uid: "<id>",
            username: "Isabelle_Cronin44",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "hobby",
          previewCommentsEnabled: false,
          private: false,
          readyState: "ERROR",
          type: "LAMBDAS",
          url: "https://bare-bar.org/",
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