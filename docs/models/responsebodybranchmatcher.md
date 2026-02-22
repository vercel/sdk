# ResponseBodyBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { ResponseBodyBranchMatcher } from "@vercel/sdk/models/getprojectsblockhistoryprojects3.js";

let value: ResponseBodyBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectstype.md) | :heavy_check_mark:                                                                                                                                                   | The type of matching to perform                                                                                                                                      |
| `pattern`                                                                                                                                                            | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The pattern to match against branch names                                                                                                                            |