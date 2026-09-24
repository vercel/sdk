# UpdateProjectBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UpdateProjectBranchMatcher } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineelastictransition.js";

let value: UpdateProjectBranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                                  | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The pattern to match against branch names                                                                                                                                                  |
| `type`                                                                                                                                                                                     | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/updateprojectprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                         | The type of matching to perform                                                                                                                                                            |