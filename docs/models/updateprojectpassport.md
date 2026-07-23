# UpdateProjectPassport

Passport configuration for the project.

## Example Usage

```typescript
import { UpdateProjectPassport } from "@vercel/sdk/models/updateprojectbranchmatcher.js";

let value: UpdateProjectPassport = {
  connectorId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `publicPathRules`                                                                              | [models.PublicPathRules](../models/publicpathrules.md)[]                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `connectorId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deploymentType`                                                                               | [models.UpdateProjectProjectsDeploymentType](../models/updateprojectprojectsdeploymenttype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |