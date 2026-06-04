# UploadProjectAvatarBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UploadProjectAvatarBranchMatcher } from "@vercel/sdk/models/uploadprojectavatarmanagedrules.js";

let value: UploadProjectAvatarBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [models.UploadProjectAvatarProjectsResponse200Type](../models/uploadprojectavatarprojectsresponse200type.md) | :heavy_check_mark:                                                                                           | The type of matching to perform                                                                              |
| `pattern`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The pattern to match against branch names                                                                    |