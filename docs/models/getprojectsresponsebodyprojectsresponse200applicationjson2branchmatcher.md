# GetProjectsResponseBodyProjectsResponse200ApplicationJson2BranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponse200ApplicationJson2BranchMatcher } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2projectstype.js";

let value:
  GetProjectsResponseBodyProjectsResponse200ApplicationJson2BranchMatcher = {
    pattern: "<value>",
    type: "equals",
  };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                                          |
| `type`                                                                                                                                                                                             | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson2ProjectsAliasDeploymentType](../models/getprojectsresponsebodyprojectsresponse200applicationjson2projectsaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                                 | The type of matching to perform                                                                                                                                                                    |