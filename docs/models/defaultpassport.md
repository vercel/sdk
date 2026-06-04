# DefaultPassport

Default Passport configuration for new projects in this team.

## Example Usage

```typescript
import { DefaultPassport } from "@vercel/sdk/models/team.js";

let value: DefaultPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `connectorId`                                                 | *string*                                                      | :heavy_check_mark:                                            | Default Passport configuration for new projects in this team. |
| `deploymentType`                                              | [models.DeploymentType](../models/deploymenttype.md)          | :heavy_check_mark:                                            | Default Passport configuration for new projects in this team. |