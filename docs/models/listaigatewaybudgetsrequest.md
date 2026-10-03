# ListAiGatewayBudgetsRequest

## Example Usage

```typescript
import { ListAiGatewayBudgetsRequest } from "@vercel/sdk/models/listaigatewaybudgetsop.js";

let value: ListAiGatewayBudgetsRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `scopeType`                                                    | [models.QueryParamScopeType](../models/queryparamscopetype.md) | :heavy_minus_sign:                                             | Restrict the list to a single budget scope.                    |                                                                |
| `teamId`                                                       | *string*                                                       | :heavy_minus_sign:                                             | The Team identifier to perform the request on behalf of.       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                  |
| `slug`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The Team slug to perform the request on behalf of.             | my-team-url-slug                                               |