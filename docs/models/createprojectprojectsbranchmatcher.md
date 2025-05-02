# CreateProjectProjectsBranchMatcher

## Example Usage

```typescript
import { CreateProjectProjectsBranchMatcher } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectProjectsBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/createprojectprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of matching to perform                                                                                                                                                          |
| `pattern`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                |