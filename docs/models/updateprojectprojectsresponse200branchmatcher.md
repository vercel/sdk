# UpdateProjectProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsResponse200BranchMatcher } from "@vercel/sdk/models/updateprojectcreatoruser.js";

let value: UpdateProjectProjectsResponse200BranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                        | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The pattern to match against branch names                                                                                                                        |
| `type`                                                                                                                                                           | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyAliasType](../models/updateprojectprojectsresponse200applicationjsonresponsebodyaliastype.md) | :heavy_check_mark:                                                                                                                                               | The type of matching to perform                                                                                                                                  |