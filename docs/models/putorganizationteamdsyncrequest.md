# PutOrganizationTeamDsyncRequest

## Example Usage

```typescript
import { PutOrganizationTeamDsyncRequest } from "@vercel/sdk/models/putorganizationteamdsyncop.js";

let value: PutOrganizationTeamDsyncRequest = {
  organizationId: "<id>",
  targetTeamId: "<id>",
  slug: "my-team-url-slug",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `targetTeamId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `slug`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | my-team-url-slug                                                                               |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team identifier to perform the request on behalf of.                                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                  |
| `requestBody`                                                                                  | [models.PutOrganizationTeamDsyncRequestBody](../models/putorganizationteamdsyncrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |