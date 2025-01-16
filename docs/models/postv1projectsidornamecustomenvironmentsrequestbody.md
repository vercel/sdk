# PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody

## Example Usage

```typescript
import { PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody } from "@vercel/sdk/models/postv1projectsidornamecustomenvironmentsop.js";

let value: PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `slug`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The slug of the custom environment to create.                 |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Description of the custom environment. This is optional.      |
| `branchMatcher`                                               | [models.BranchMatcher](../models/branchmatcher.md)            | :heavy_minus_sign:                                            | How we want to determine a matching branch. This is optional. |
| `copyEnvVarsFrom`                                             | *string*                                                      | :heavy_minus_sign:                                            | Where to copy environment variables from. This is optional.   |