# ResponseBodySsoProtection

## Example Usage

```typescript
import { ResponseBodySsoProtection } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: ResponseBodySsoProtection = {
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `deploymentType`                                                                                                                           | [models.ResponseBodyDeploymentType](../models/responsebodydeploymenttype.md)                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `cve55182MigrationAppliedFrom`                                                                                                             | [models.ResponseBodyCve55182MigrationAppliedFrom](../models/responsebodycve55182migrationappliedfrom.md)                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `april2026SecurityIncidentMigrationAppliedFrom`                                                                                            | [models.ResponseBodyApril2026SecurityIncidentMigrationAppliedFrom](../models/responsebodyapril2026securityincidentmigrationappliedfrom.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |