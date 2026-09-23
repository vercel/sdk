# GetProjectsResponseBodyProjectsBranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsBranchMatcher } from "@vercel/sdk/models/erl.js";

let value: GetProjectsResponseBodyProjectsBranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                          | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                          |
| `type`                                                                                                                                                                             | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson1AliasDeploymentType](../models/getprojectsresponsebodyprojectsresponse200applicationjson1aliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                 | The type of matching to perform                                                                                                                                                    |