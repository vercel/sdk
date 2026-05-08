# UpdateSandboxNetworkPolicyHeaders

## Example Usage

```typescript
import { UpdateSandboxNetworkPolicyHeaders } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxNetworkPolicyHeaders = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                | [models.UpdateSandboxNetworkPolicySandboxesV2BetaKey](../models/updatesandboxnetworkpolicysandboxesv2betakey.md)     | :heavy_minus_sign:                                                                                                   | Matcher for the entry key (header name or query key).                                                                |
| `value`                                                                                                              | [models.UpdateSandboxNetworkPolicySandboxesV2BetaValue](../models/updatesandboxnetworkpolicysandboxesv2betavalue.md) | :heavy_minus_sign:                                                                                                   | Matcher for the entry value.                                                                                         |