# SandboxResponseRule

Rules that return custom responses for requests matching specific domains.

## Example Usage

```typescript
import { SandboxResponseRule } from "@vercel/sdk/models/sandboxresponserule.js";

let value: SandboxResponseRule = {
  domain: "wicked-fraudster.biz",
  matchDimensions: [
    "path",
    "method",
  ],
  statusCode: 899.25,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `domain`                                                                | *string*                                                                | :heavy_check_mark:                                                      | The domain (or wildcard pattern) that this response rule applies to.    |                                                                         |
| `matchDimensions`                                                       | *string*[]                                                              | :heavy_minus_sign:                                                      | Request dimensions used to match this rule. Matcher values are omitted. | [<br/>"path",<br/>"method"<br/>]                                        |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | The HTTP status code returned for matching requests.                    |                                                                         |