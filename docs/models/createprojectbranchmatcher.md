# CreateProjectBranchMatcher

## Example Usage

```typescript
import { CreateProjectBranchMatcher } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/createprojectprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of matching to perform                                                                                                                                                          |
| `pattern`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                |