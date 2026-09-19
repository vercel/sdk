# GetProjectProjectsBranchMatcher

## Example Usage

```typescript
import { GetProjectProjectsBranchMatcher } from "@vercel/sdk/models/getprojectfrom1.js";

let value: GetProjectProjectsBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                          | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                          |
| `type`                                                                                                                                                                             | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/getprojectprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                 | The type of matching to perform                                                                                                                                                    |