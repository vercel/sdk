# GetDeploymentsResponseBody

## Example Usage

```typescript
import { GetDeploymentsResponseBody } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsResponseBody = {
  deployments: [
    {
      buildingAt: 1609492210000,
      created: 1609492210000,
      createdAt: 6246.82,
      creator: {
        email: "example@example.com",
        githubLogin: "johndoe",
        gitlabLogin: "johndoe",
        uid: "eLrCnEgbKhsHyfbiNR7E8496",
        username: "johndoe",
      },
      defaultRoute: "/docs",
      deleted: 1609492210000,
      errorCode: "BUILD_FAILED",
      errorMessage:
        "The Deployment has been canceled because this project was not affected",
      inspectorUrl:
        "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
      name: "docs",
      oomReport: "out-of-memory",
      projectId: "<id>",
      ready: 1609492210000,
      readyState: "CANCELED",
      softDeletedByRetention: true,
      source: "cli",
      state: "READY",
      target: "production",
      type: "LAMBDAS",
      uid: "dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa",
      undeleted: 1609492210000,
      url: "docs-9jaeg38me.vercel.app",
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
| `deployments`                                                                                                                                                   | [models.Deployments](../models/deployments.md)[]                                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |