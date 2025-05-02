# UpdateProjectDataCacheBranchMatcher

## Example Usage

```typescript
import { UpdateProjectDataCacheBranchMatcher } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                     | [models.UpdateProjectDataCacheProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/updateprojectdatacacheprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                                         | The type of matching to perform                                                                                                                                                                            |
| `pattern`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The pattern to match against branch names                                                                                                                                                                  |