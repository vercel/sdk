# DeleteProjectAvatarProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { DeleteProjectAvatarProjectsResponse200BranchMatcher } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarProjectsResponse200BranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                    | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The pattern to match against branch names                                                                                                                                    |
| `type`                                                                                                                                                                       | [models.DeleteProjectAvatarProjectsResponse200ApplicationJSONResponseBodyAliasType](../models/deleteprojectavatarprojectsresponse200applicationjsonresponsebodyaliastype.md) | :heavy_check_mark:                                                                                                                                                           | The type of matching to perform                                                                                                                                              |