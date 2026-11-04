# SandboxForwardRule

Rules that forward outgoing requests matching specific domains.

## Example Usage

```typescript
import { SandboxForwardRule } from "@vercel/sdk/models/sandboxforwardrule.js";

let value: SandboxForwardRule = {
  domain: "defensive-adaptation.info",
  forwardURL: "https://bouncy-vibration.net",
  matchDimensions: [
    "path",
    "method",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `domain`                                                                | *string*                                                                | :heavy_check_mark:                                                      | The domain (or wildcard pattern) that this forwarding rule applies to.  |                                                                         |
| `forwardURL`                                                            | *string*                                                                | :heavy_check_mark:                                                      | The URL to forward matching requests to.                                |                                                                         |
| `matchDimensions`                                                       | *string*[]                                                              | :heavy_minus_sign:                                                      | Request dimensions used to match this rule. Matcher values are omitted. | [<br/>"path",<br/>"method"<br/>]                                        |