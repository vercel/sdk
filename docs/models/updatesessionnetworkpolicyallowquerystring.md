# UpdateSessionNetworkPolicyAllowQueryString

## Example Usage

```typescript
import { UpdateSessionNetworkPolicyAllowQueryString } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: UpdateSessionNetworkPolicyAllowQueryString = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `key`                                                                                            | [models.UpdateSessionNetworkPolicyAllowKey](../models/updatesessionnetworkpolicyallowkey.md)     | :heavy_minus_sign:                                                                               | Matcher for the entry key (header name or query key).                                            |
| `value`                                                                                          | [models.UpdateSessionNetworkPolicyAllowValue](../models/updatesessionnetworkpolicyallowvalue.md) | :heavy_minus_sign:                                                                               | Matcher for the entry value.                                                                     |