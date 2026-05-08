# UpdateSandboxAllowHeaders

## Example Usage

```typescript
import { UpdateSandboxAllowHeaders } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxAllowHeaders = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `key`                                                                                                | [models.UpdateSandboxAllowSandboxesV2BetaKey](../models/updatesandboxallowsandboxesv2betakey.md)     | :heavy_minus_sign:                                                                                   | Matcher for the entry key (header name or query key).                                                |
| `value`                                                                                              | [models.UpdateSandboxAllowSandboxesV2BetaValue](../models/updatesandboxallowsandboxesv2betavalue.md) | :heavy_minus_sign:                                                                                   | Matcher for the entry value.                                                                         |