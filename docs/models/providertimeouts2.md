# ProviderTimeouts2

## Example Usage

```typescript
import { ProviderTimeouts2 } from "@vercel/sdk/models/createaigatewayvirtualmodelconfigop.js";

let value: ProviderTimeouts2 = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `byok`                                                                             | Record<string, *number*>                                                           | :heavy_minus_sign:                                                                 | The timeout for each provider that uses a BYOK credential, keyed by provider slug. |