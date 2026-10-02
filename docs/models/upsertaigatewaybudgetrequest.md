# UpsertAiGatewayBudgetRequest

## Example Usage

```typescript
import { UpsertAiGatewayBudgetRequest } from "@vercel/sdk/models/upsertaigatewaybudgetop.js";

let value: UpsertAiGatewayBudgetRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team identifier to perform the request on behalf of.                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                            |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team slug to perform the request on behalf of.                                       | my-team-url-slug                                                                         |
| `requestBody`                                                                            | [models.UpsertAiGatewayBudgetRequestBody](../models/upsertaigatewaybudgetrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |