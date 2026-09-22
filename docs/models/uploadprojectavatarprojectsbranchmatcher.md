# UploadProjectAvatarProjectsBranchMatcher

## Example Usage

```typescript
import { UploadProjectAvatarProjectsBranchMatcher } from "@vercel/sdk/models/uploadprojectavatarfrom1.js";

let value: UploadProjectAvatarProjectsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                            | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                                            |
| `type`                                                                                                                                                                                               | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                                   | The type of matching to perform                                                                                                                                                                      |