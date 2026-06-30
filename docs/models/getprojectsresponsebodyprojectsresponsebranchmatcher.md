# GetProjectsResponseBodyProjectsResponseBranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponseBranchMatcher } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2action.js";

let value: GetProjectsResponseBodyProjectsResponseBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson2ProjectsLatestDeploymentsType](../models/getprojectsresponsebodyprojectsresponse200applicationjson2projectslatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of matching to perform                                                                                                                                                                        |
| `pattern`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The pattern to match against branch names                                                                                                                                                              |