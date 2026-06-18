# UpdateProjectProjectsDeploymentPolicy

Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from {@link TeamDeploymentPolicy} so the two storage locations don't share a type by accident.

## Example Usage

```typescript
import { UpdateProjectProjectsDeploymentPolicy } from "@vercel/sdk/models/updateprojectprojectsaction.js";

let value: UpdateProjectProjectsDeploymentPolicy = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `gitSources`                                                                           | [models.UpdateProjectGitSources](../models/updateprojectgitsources.md)[]               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `deploymentSources`                                                                    | [models.UpdateProjectDeploymentSources](../models/updateprojectdeploymentsources.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |