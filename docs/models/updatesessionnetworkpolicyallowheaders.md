# UpdateSessionNetworkPolicyAllowHeaders

## Example Usage

```typescript
import { UpdateSessionNetworkPolicyAllowHeaders } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: UpdateSessionNetworkPolicyAllowHeaders = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                          | [models.UpdateSessionNetworkPolicyAllowSandboxesV2BetaKey](../models/updatesessionnetworkpolicyallowsandboxesv2betakey.md)     | :heavy_minus_sign:                                                                                                             | Matcher for the entry key (header name or query key).                                                                          |
| `value`                                                                                                                        | [models.UpdateSessionNetworkPolicyAllowSandboxesV2BetaValue](../models/updatesessionnetworkpolicyallowsandboxesv2betavalue.md) | :heavy_minus_sign:                                                                                                             | Matcher for the entry value.                                                                                                   |