# GetProjectBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetProjectBranchMatcher } from "@vercel/sdk/models/getprojectapril2026securityincidentmigrationappliedfrom.js";

let value: GetProjectBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/getprojectprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                   | The type of matching to perform                                                                                                                                                      |
| `pattern`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                            |