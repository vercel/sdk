# UpdateSandboxAllowQueryString

## Example Usage

```typescript
import { UpdateSandboxAllowQueryString } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxAllowQueryString = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `key`                                                                  | [models.UpdateSandboxAllowKey](../models/updatesandboxallowkey.md)     | :heavy_minus_sign:                                                     | Matcher for the entry key (header name or query key).                  |
| `value`                                                                | [models.UpdateSandboxAllowValue](../models/updatesandboxallowvalue.md) | :heavy_minus_sign:                                                     | Matcher for the entry value.                                           |