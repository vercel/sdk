# UpdateProjectProjectsBranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsBranchMatcher } from "@vercel/sdk/models/updateprojectprojectsbranchmatcher.js";

let value: UpdateProjectProjectsBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyType](../models/updateprojectprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                     | The type of matching to perform                                                                                                                        |
| `pattern`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The pattern to match against branch names                                                                                                              |