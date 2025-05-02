# UpdateProjectDataCacheProjectsBranchMatcher

## Example Usage

```typescript
import { UpdateProjectDataCacheProjectsBranchMatcher } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheProjectsBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [models.UpdateProjectDataCacheProjectsResponse200ApplicationJSONResponseBodyType](../models/updateprojectdatacacheprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                       | The type of matching to perform                                                                                                                                          |
| `pattern`                                                                                                                                                                | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The pattern to match against branch names                                                                                                                                |