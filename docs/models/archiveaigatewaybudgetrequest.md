# ArchiveAiGatewayBudgetRequest

## Example Usage

```typescript
import { ArchiveAiGatewayBudgetRequest } from "@vercel/sdk/models/archiveaigatewaybudgetop.js";

let value: ArchiveAiGatewayBudgetRequest = {
  scopeType: "project",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `scopeType`                                                                                                | [models.ArchiveAiGatewayBudgetQueryParamScopeType](../models/archiveaigatewaybudgetqueryparamscopetype.md) | :heavy_check_mark:                                                                                         | The budget scope to archive.                                                                               |                                                                                                            |
| `projectId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Required when scopeType is "project".                                                                      |                                                                                                            |
| `userId`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Required when scopeType is "user".                                                                         |                                                                                                            |
| `teamId`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The Team identifier to perform the request on behalf of.                                                   | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                              |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The Team slug to perform the request on behalf of.                                                         | my-team-url-slug                                                                                           |