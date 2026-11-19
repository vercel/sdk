# CreateProjectProjectsBranchMatcher

## Example Usage

```typescript
import { CreateProjectProjectsBranchMatcher } from "@vercel/sdk/models/createprojectprojectsresponse200applicationjsonresponsebodytargetstype.js";

let value: CreateProjectProjectsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                |
| `type`                                                                                                                                                                                   | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/createprojectprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of matching to perform                                                                                                                                                          |