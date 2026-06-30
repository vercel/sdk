# GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasBranchMatcher

## Example Usage

```typescript
import {
  GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasBranchMatcher,
} from "@vercel/sdk/models/getprojectsresponsebodyprojectstargets.js";

let value:
  GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasBranchMatcher =
    {
      type: "endsWith",
      pattern: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasDeploymentType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectsaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                                 | The type of matching to perform                                                                                                                                                                    |
| `pattern`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                                          |