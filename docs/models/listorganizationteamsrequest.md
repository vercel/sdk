# ListOrganizationTeamsRequest

## Example Usage

```typescript
import { ListOrganizationTeamsRequest } from "@vercel/sdk/models/listorganizationteamsop.js";

let value: ListOrganizationTeamsRequest = {
  organizationId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `organizationId`                                              | *string*                                                      | :heavy_check_mark:                                            | The ID of the organization.                                   |
| `cursor`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Pagination cursor.                                            |
| `includeMemberCount`                                          | *boolean*                                                     | :heavy_minus_sign:                                            | When true, includes each team's member count in the response. |