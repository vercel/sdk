# MoveProjectDomainRequestBody

## Example Usage

```typescript
import { MoveProjectDomainRequestBody } from "@vercel/sdk/models/moveprojectdomainop.js";

let value: MoveProjectDomainRequestBody = {
  projectId: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
  gitBranch: null,
  redirect: "foobar.com",
  redirectStatusCode: 307,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique target project identifier                                                           | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                                                               |
| `gitBranch`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | Git branch to link the project domain                                                          | <nil>                                                                                          |
| `redirect`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Target destination domain for redirect                                                         | foobar.com                                                                                     |
| `redirectStatusCode`                                                                           | [models.MoveProjectDomainRedirectStatusCode](../models/moveprojectdomainredirectstatuscode.md) | :heavy_minus_sign:                                                                             | Status code for domain redirect                                                                | 307                                                                                            |