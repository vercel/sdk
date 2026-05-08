# UpdateSandboxNetworkPolicySandboxesV2BetaKey

Matcher for the entry key (header name or query key).

## Example Usage

```typescript
import { UpdateSandboxNetworkPolicySandboxesV2BetaKey } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxNetworkPolicySandboxesV2BetaKey = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `exact`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Match the value exactly. Case-sensitive for paths, header values, and methods; case-insensitive for domains and header keys. |
| `startsWith`                                                                                                                 | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Match values that start with the given prefix.                                                                               |