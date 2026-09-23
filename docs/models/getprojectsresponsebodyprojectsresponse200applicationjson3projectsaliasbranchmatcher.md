# GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasBranchMatcher

## Example Usage

```typescript
import {
  GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasBranchMatcher,
} from "@vercel/sdk/models/responsebodyexpiration.js";

let value:
  GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasBranchMatcher =
    {
      pattern: "<value>",
      type: "endsWith",
    };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                                          |
| `type`                                                                                                                                                                                             | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsAliasDeploymentType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectsaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                                 | The type of matching to perform                                                                                                                                                                    |