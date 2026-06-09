# CreateProjectDeploymentPolicy

Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from {@link TeamDeploymentPolicy} so the two storage locations don't share a type by accident.

## Example Usage

```typescript
import { CreateProjectDeploymentPolicy } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectDeploymentPolicy = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `gitSources`                                                                           | [models.CreateProjectGitSources](../models/createprojectgitsources.md)[]               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `deploymentSources`                                                                    | [models.CreateProjectDeploymentSources](../models/createprojectdeploymentsources.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |