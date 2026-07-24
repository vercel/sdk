# GetProjectIntegrations

Integration installation enabled on the project.

## Example Usage

```typescript
import { GetProjectIntegrations } from "@vercel/sdk/models/getprojectapril2026securityincidentmigrationappliedfrom.js";

let value: GetProjectIntegrations = {
  installationId: "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `installationId`                                                 | *string*                                                         | :heavy_check_mark:                                               | The integration installation ID.                                 | icfg_3bwCLgxL8qt5kjRLcv2Dit7F                                    |
| `resources`                                                      | [models.GetProjectResources](../models/getprojectresources.md)[] | :heavy_minus_sign:                                               | The list of the installation resources connected to the project. |                                                                  |