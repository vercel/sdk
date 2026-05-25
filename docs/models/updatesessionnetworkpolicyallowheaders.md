# UpdateSessionNetworkPolicyAllowHeaders

## Example Usage

```typescript
import { UpdateSessionNetworkPolicyAllowHeaders } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: UpdateSessionNetworkPolicyAllowHeaders = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                              | [models.UpdateSessionNetworkPolicyAllowSandboxesKey](../models/updatesessionnetworkpolicyallowsandboxeskey.md)     | :heavy_minus_sign:                                                                                                 | Matcher for the entry key (header name or query key).                                                              |
| `value`                                                                                                            | [models.UpdateSessionNetworkPolicyAllowSandboxesValue](../models/updatesessionnetworkpolicyallowsandboxesvalue.md) | :heavy_minus_sign:                                                                                                 | Matcher for the entry value.                                                                                       |