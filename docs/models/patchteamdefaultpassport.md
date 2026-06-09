# PatchTeamDefaultPassport

Default Passport configuration for new projects.

## Example Usage

```typescript
import { PatchTeamDefaultPassport } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamDefaultPassport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deploymentType`                                                                               | [models.PatchTeamTeamsRequestDeploymentType](../models/patchteamteamsrequestdeploymenttype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |