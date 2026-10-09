# DeleteProjectAvatarBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { DeleteProjectAvatarBranchMatcher } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The pattern to match against branch names                                                                                                                                                              |
| `type`                                                                                                                                                                                                 | [models.DeleteProjectAvatarProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/deleteprojectavatarprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of matching to perform                                                                                                                                                                        |