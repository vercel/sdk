# UpdateMicrofrontendsDeploymentPolicy

Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from {@link TeamDeploymentPolicy} so the two storage locations don't share a type by accident.

## Example Usage

```typescript
import { UpdateMicrofrontendsDeploymentPolicy } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsDeploymentPolicy = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `gitSources`                                                                                         | [models.UpdateMicrofrontendsGitSources](../models/updatemicrofrontendsgitsources.md)[]               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deploymentSources`                                                                                  | [models.UpdateMicrofrontendsDeploymentSources](../models/updatemicrofrontendsdeploymentsources.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |