# GetTeamsResponseBody1

## Example Usage

```typescript
import { GetTeamsResponseBody1 } from "@vercel/sdk/models/getteamsop.js";

let value: GetTeamsResponseBody1 = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  teams: [
    {
      avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
      billing: {
        plan: "pro",
      },
      createdAt: 1630748523395,
      creatorId: "R6efeCJQ2HKXywuasPDc0fOWB",
      defaultDeploymentProtection: {},
      description:
        "Our mission is to make cloud computing accessible to everyone.",
      directorySyncSource: "none",
      emailDomain: "example.com",
      id: "team_nllPyCtREAqxxdyFKbbMDlxd",
      inviteCode: "hasihf9e89",
      limited: false,
      name: "My Team",
      orgRootTeamId: "team_nllPyCtREAqxxdyFKbbMDlxd",
      parentId: "org_nllPyCtREAqxxdyFKbbMDlxd",
      platform: true,
      previewDeploymentSuffix: "example.dev",
      saml: {
        connection: {
          connectedAt: 1611796915677,
          lastReceivedWebhookEvent: 1611796915677,
          lastSyncedAt: 1611796915677,
          state: "active",
          type: "OktaSAML",
          status: "<value>",
        },
        directory: {
          connectedAt: 1611796915677,
          lastReceivedWebhookEvent: 1611796915677,
          lastSyncedAt: 1611796915677,
          state: "active",
          type: "OktaSAML",
        },
        enforced: true,
      },
      slug: "my-team",
      stagingPrefix: "<value>",
      updatedAt: 1611796915677,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `teams`                                                                                                                                                         | [models.Team](../models/team.md)[]                                                                                                                              | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |