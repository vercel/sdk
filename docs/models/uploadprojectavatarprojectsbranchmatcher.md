# UploadProjectAvatarProjectsBranchMatcher

## Example Usage

```typescript
import { UploadProjectAvatarProjectsBranchMatcher } from "@vercel/sdk/models/uploadprojectavatarlastrollbacktarget.js";

let value: UploadProjectAvatarProjectsBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                 | The type of matching to perform                                                                                                                                    |
| `pattern`                                                                                                                                                          | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The pattern to match against branch names                                                                                                                          |