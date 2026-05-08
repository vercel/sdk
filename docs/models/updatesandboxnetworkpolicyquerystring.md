# UpdateSandboxNetworkPolicyQueryString

## Example Usage

```typescript
import { UpdateSandboxNetworkPolicyQueryString } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxNetworkPolicyQueryString = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `key`                                                                                  | [models.UpdateSandboxNetworkPolicyKey](../models/updatesandboxnetworkpolicykey.md)     | :heavy_minus_sign:                                                                     | Matcher for the entry key (header name or query key).                                  |
| `value`                                                                                | [models.UpdateSandboxNetworkPolicyValue](../models/updatesandboxnetworkpolicyvalue.md) | :heavy_minus_sign:                                                                     | Matcher for the entry value.                                                           |