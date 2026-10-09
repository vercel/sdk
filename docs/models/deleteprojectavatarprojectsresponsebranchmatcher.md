# DeleteProjectAvatarProjectsResponseBranchMatcher

## Example Usage

```typescript
import { DeleteProjectAvatarProjectsResponseBranchMatcher } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarProjectsResponseBranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                        | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The pattern to match against branch names                                                                                                                                        |
| `type`                                                                                                                                                                           | [models.DeleteProjectAvatarProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/deleteprojectavatarprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                               | The type of matching to perform                                                                                                                                                  |