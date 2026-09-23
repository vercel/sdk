# UploadProjectAvatarProjectsResponseBranchMatcher

## Example Usage

```typescript
import { UploadProjectAvatarProjectsResponseBranchMatcher } from "@vercel/sdk/models/uploadprojectavataroidcproviders.js";

let value: UploadProjectAvatarProjectsResponseBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                        | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The pattern to match against branch names                                                                                                                                        |
| `type`                                                                                                                                                                           | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                               | The type of matching to perform                                                                                                                                                  |