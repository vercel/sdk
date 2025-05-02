# GetProjectsProjectsResponseBranchMatcher

## Example Usage

```typescript
import { GetProjectsProjectsResponseBranchMatcher } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsProjectsResponseBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [models.GetProjectsProjectsResponse200ApplicationJSONResponseBodyProjectsType](../models/getprojectsprojectsresponse200applicationjsonresponsebodyprojectstype.md) | :heavy_check_mark:                                                                                                                                                 | The type of matching to perform                                                                                                                                    |
| `pattern`                                                                                                                                                          | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The pattern to match against branch names                                                                                                                          |