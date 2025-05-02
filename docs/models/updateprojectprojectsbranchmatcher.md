# UpdateProjectProjectsBranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsBranchMatcher } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectProjectsBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/updateprojectprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of matching to perform                                                                                                                                                          |
| `pattern`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                |