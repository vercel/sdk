# CustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CustomEnvironmentBranchMatcher } from "@vercel/sdk/models/readystate.js";

let value: CustomEnvironmentBranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The pattern to match against branch names                                                          |
| `type`                                                                                             | [models.CancelDeploymentCustomEnvironmentType](../models/canceldeploymentcustomenvironmenttype.md) | :heavy_check_mark:                                                                                 | The type of matching to perform                                                                    |