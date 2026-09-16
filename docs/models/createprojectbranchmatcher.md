# CreateProjectBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CreateProjectBranchMatcher } from "@vercel/sdk/models/createprojectcontenthint2.js";

let value: CreateProjectBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                                  | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The pattern to match against branch names                                                                                                                                                  |
| `type`                                                                                                                                                                                     | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/createprojectprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                         | The type of matching to perform                                                                                                                                                            |