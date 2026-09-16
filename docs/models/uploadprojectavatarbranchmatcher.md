# UploadProjectAvatarBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UploadProjectAvatarBranchMatcher } from "@vercel/sdk/models/uploadprojectavatarhasvalue.js";

let value: UploadProjectAvatarBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The pattern to match against branch names                                                                                                                                                              |
| `type`                                                                                                                                                                                                 | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of matching to perform                                                                                                                                                                        |