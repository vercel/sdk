# PatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdBranchMatcher

How we want to determine a matching branch. This is optional.

## Example Usage

```typescript
import { PatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdBranchMatcher } from "@vercel/sdk/models/patchv9projectsidornamecustomenvironmentsenvironmentslugoridop.js";

let value:
  PatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdBranchMatcher = {
    type: "startsWith",
    pattern: "<value>",
  };
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [models.PatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdType](../models/patchv9projectsidornamecustomenvironmentsenvironmentslugoridtype.md) | :heavy_check_mark:                                                                                                                                       | Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".                                                                                     |
| `pattern`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Git branch name or portion thereof.                                                                                                                      |