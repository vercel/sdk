# GetProjectProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { GetProjectProjectsResponse200BranchMatcher } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectProjectsResponse200BranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The pattern to match against branch names                                                                                                                  |
| `type`                                                                                                                                                     | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyAliasType](../models/getprojectprojectsresponse200applicationjsonresponsebodyaliastype.md) | :heavy_check_mark:                                                                                                                                         | The type of matching to perform                                                                                                                            |