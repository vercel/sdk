# DeleteProjectAvatarDeploymentPolicy

Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from {@link TeamDeploymentPolicy} so the two storage locations don't share a type by accident.

## Example Usage

```typescript
import { DeleteProjectAvatarDeploymentPolicy } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarDeploymentPolicy = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `deploymentSources`                                                                                | [models.DeleteProjectAvatarDeploymentSources](../models/deleteprojectavatardeploymentsources.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `gitSources`                                                                                       | [models.DeleteProjectAvatarGitSources](../models/deleteprojectavatargitsources.md)[]               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |