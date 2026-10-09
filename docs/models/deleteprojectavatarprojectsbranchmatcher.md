# DeleteProjectAvatarProjectsBranchMatcher

## Example Usage

```typescript
import { DeleteProjectAvatarProjectsBranchMatcher } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarProjectsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                            | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                                            |
| `type`                                                                                                                                                                                               | [models.DeleteProjectAvatarProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/deleteprojectavatarprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                                   | The type of matching to perform                                                                                                                                                                      |