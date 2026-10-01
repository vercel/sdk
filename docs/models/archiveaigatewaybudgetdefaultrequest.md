# ArchiveAiGatewayBudgetDefaultRequest

## Example Usage

```typescript
import { ArchiveAiGatewayBudgetDefaultRequest } from "@vercel/sdk/models/archiveaigatewaybudgetdefaultop.js";

let value: ArchiveAiGatewayBudgetDefaultRequest = {
  scopeType: "user",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `scopeType`                                                                                                              | [models.ArchiveAiGatewayBudgetDefaultQueryParamScopeType](../models/archiveaigatewaybudgetdefaultqueryparamscopetype.md) | :heavy_check_mark:                                                                                                       | The budget default scope to delete.                                                                                      |                                                                                                                          |
| `teamId`                                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The Team identifier to perform the request on behalf of.                                                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                                            |
| `slug`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The Team slug to perform the request on behalf of.                                                                       | my-team-url-slug                                                                                                         |