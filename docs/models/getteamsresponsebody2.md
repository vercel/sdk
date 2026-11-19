# GetTeamsResponseBody2

A paginated list of teams.

## Example Usage

```typescript
import { GetTeamsResponseBody2 } from "@vercel/sdk/models/getteamsop.js";

let value: GetTeamsResponseBody2 = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  teams: [
    {
      avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
      createdAt: 1630748523395,
      directorySyncSource: "organization",
      id: "team_nllPyCtREAqxxdyFKbbMDlxd",
      limited: true,
      limitedBy: [],
      name: "My Team",
      orgRootTeamId: "team_nllPyCtREAqxxdyFKbbMDlxd",
      parentId: "org_nllPyCtREAqxxdyFKbbMDlxd",
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `teams`                                                                                                                                                         | *models.ResponseBodyTeams*[]                                                                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |