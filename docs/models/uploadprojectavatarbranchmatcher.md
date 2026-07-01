# UploadProjectAvatarBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UploadProjectAvatarBranchMatcher } from "@vercel/sdk/models/uploadprojectavatarlastrollbacktarget.js";

let value: UploadProjectAvatarBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of matching to perform                                                                                                                                                                        |
| `pattern`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The pattern to match against branch names                                                                                                                                                              |