# UpdateProjectProjectsBranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsBranchMatcher } from "@vercel/sdk/models/updateprojectprojectsresourceconfig.js";

let value: UpdateProjectProjectsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                |
| `type`                                                                                                                                                                                   | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/updateprojectprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of matching to perform                                                                                                                                                          |