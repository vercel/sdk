# UpdateNetworkPolicyHeaders

## Example Usage

```typescript
import { UpdateNetworkPolicyHeaders } from "@vercel/sdk/models/updatenetworkpolicyop.js";

let value: UpdateNetworkPolicyHeaders = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `key`                                                                                      | [models.UpdateNetworkPolicyKey](../models/updatenetworkpolicykey.md)                       | :heavy_minus_sign:                                                                         | Matcher for the entry key (header name or query key).                                      |
| `value`                                                                                    | [models.UpdateNetworkPolicySandboxesValue](../models/updatenetworkpolicysandboxesvalue.md) | :heavy_minus_sign:                                                                         | Matcher for the entry value.                                                               |