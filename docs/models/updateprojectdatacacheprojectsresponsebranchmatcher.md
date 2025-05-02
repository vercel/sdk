# UpdateProjectDataCacheProjectsResponseBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UpdateProjectDataCacheProjectsResponseBranchMatcher } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheProjectsResponseBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                       | [models.UpdateProjectDataCacheProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/updateprojectdatacacheprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                           | The type of matching to perform                                                                                                                                                                              |
| `pattern`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The pattern to match against branch names                                                                                                                                                                    |