# CustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CustomEnvironmentBranchMatcher } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsfunctions.js";

let value: CustomEnvironmentBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.CancelDeploymentCustomEnvironmentType](../models/canceldeploymentcustomenvironmenttype.md) | :heavy_check_mark:                                                                                 | The type of matching to perform                                                                    |
| `pattern`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The pattern to match against branch names                                                          |