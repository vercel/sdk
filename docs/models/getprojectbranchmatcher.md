# GetProjectBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetProjectBranchMatcher } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                            |
| `type`                                                                                                                                                                               | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/getprojectprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                   | The type of matching to perform                                                                                                                                                      |