# UploadProjectAvatarProjectsResponseBranchMatcher

## Example Usage

```typescript
import { UploadProjectAvatarProjectsResponseBranchMatcher } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarProjectsResponseBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                               | The type of matching to perform                                                                                                                                                  |
| `pattern`                                                                                                                                                                        | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The pattern to match against branch names                                                                                                                                        |