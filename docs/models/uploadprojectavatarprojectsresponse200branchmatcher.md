# UploadProjectAvatarProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { UploadProjectAvatarProjectsResponse200BranchMatcher } from "@vercel/sdk/models/uploadprojectavatarlastrollbacktarget.js";

let value: UploadProjectAvatarProjectsResponse200BranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                           | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyAliasDeploymentType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodyaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                               | The type of matching to perform                                                                                                                                                                  |
| `pattern`                                                                                                                                                                                        | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The pattern to match against branch names                                                                                                                                                        |