# RemoveOrganizationTeamRequest

## Example Usage

```typescript
import { RemoveOrganizationTeamRequest } from "@vercel/sdk/models/removeorganizationteamop.js";

let value: RemoveOrganizationTeamRequest = {
  organizationId: "<id>",
  targetTeamId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `organizationId`              | *string*                      | :heavy_check_mark:            | The ID of the organization.   |
| `targetTeamId`                | *string*                      | :heavy_check_mark:            | The ID of the team to remove. |