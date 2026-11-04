# GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsBranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsBranchMatcher } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponseto.js";

let value:
  GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsBranchMatcher =
    {
      pattern: "<value>",
      type: "endsWith",
    };
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The pattern to match against branch names                                                                                                                                                                    |
| `type`                                                                                                                                                                                                       | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsTargetsBranchMatcherType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectstargetsbranchmatchertype.md) | :heavy_check_mark:                                                                                                                                                                                           | The type of matching to perform                                                                                                                                                                              |