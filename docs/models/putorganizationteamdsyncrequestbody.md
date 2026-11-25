# PutOrganizationTeamDsyncRequestBody

## Example Usage

```typescript
import { PutOrganizationTeamDsyncRequestBody } from "@vercel/sdk/models/putorganizationteamdsyncop.js";

let value: PutOrganizationTeamDsyncRequestBody = {
  dsyncMode: "team",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `dsyncMode`                                                                                                              | [models.PutOrganizationTeamDsyncDsyncMode](../models/putorganizationteamdsyncdsyncmode.md)                               | :heavy_check_mark:                                                                                                       | Whether the Organization's Directory Sync or the team's own directory governs the team's memberships.                    |
| `overrideLockout`                                                                                                        | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Change the root team's mode even if it would leave it without an owner or the acting admin without the Owner role on it. |