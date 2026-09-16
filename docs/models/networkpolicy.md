# NetworkPolicy

Network policy configuration.

## Example Usage

```typescript
import { NetworkPolicy } from "@vercel/sdk/models/namedsandbox.js";

let value: NetworkPolicy = {
  mode: "default-deny",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `allowedCIDRs`                                           | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `allowedDomains`                                         | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `deniedCIDRs`                                            | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `mode`                                                   | [models.NamedSandboxMode](../models/namedsandboxmode.md) | :heavy_check_mark:                                       | N/A                                                      |
| `s3Key`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |