# GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher } from "@vercel/sdk/models/getv9projectsidornamecustomenvironmentsop.js";

let value: GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [models.GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType](../models/getv9projectsidornamecustomenvironmentsenvironmenttype.md) | :heavy_check_mark:                                                                                                                   | The type of matching to perform                                                                                                      |
| `pattern`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The pattern to match against branch names                                                                                            |