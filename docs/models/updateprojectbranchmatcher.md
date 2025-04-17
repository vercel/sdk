# UpdateProjectBranchMatcher

## Example Usage

```typescript
import { UpdateProjectBranchMatcher } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyType](../models/updateprojectprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                     | The type of matching to perform                                                                                                                        |
| `pattern`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The pattern to match against branch names                                                                                                              |