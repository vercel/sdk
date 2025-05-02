# CreateProjectBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CreateProjectBranchMatcher } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                     | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/createprojectprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                         | The type of matching to perform                                                                                                                                                            |
| `pattern`                                                                                                                                                                                  | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The pattern to match against branch names                                                                                                                                                  |