# PutOrganizationTeamDsyncRequestBody

## Example Usage

```typescript
import { PutOrganizationTeamDsyncRequestBody } from "@vercel/sdk/models/putorganizationteamdsyncop.js";

let value: PutOrganizationTeamDsyncRequestBody = {
  dsyncMode: "team",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `dsyncMode`                                                                                           | [models.PutOrganizationTeamDsyncDsyncMode](../models/putorganizationteamdsyncdsyncmode.md)            | :heavy_check_mark:                                                                                    | Whether the Organization's Directory Sync or the team's own directory governs the team's memberships. |