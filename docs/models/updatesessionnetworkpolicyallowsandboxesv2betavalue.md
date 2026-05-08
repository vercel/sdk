# UpdateSessionNetworkPolicyAllowSandboxesV2BetaValue

Matcher for the entry value.

## Example Usage

```typescript
import { UpdateSessionNetworkPolicyAllowSandboxesV2BetaValue } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: UpdateSessionNetworkPolicyAllowSandboxesV2BetaValue = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `exact`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Match the value exactly. Case-sensitive for paths, header values, and methods; case-insensitive for domains and header keys. |
| `startsWith`                                                                                                                 | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Match values that start with the given prefix.                                                                               |