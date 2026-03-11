# GetProjectsByIdOrNameCustomEnvironmentsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetProjectsByIdOrNameCustomEnvironmentsBranchMatcher } from "@vercel/sdk/models/getprojectsbyidornamecustomenvironmentsop.js";

let value: GetProjectsByIdOrNameCustomEnvironmentsBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [models.GetProjectsByIdOrNameCustomEnvironmentsEnvironmentType](../models/getprojectsbyidornamecustomenvironmentsenvironmenttype.md) | :heavy_check_mark:                                                                                                                   | The type of matching to perform                                                                                                      |
| `pattern`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The pattern to match against branch names                                                                                            |