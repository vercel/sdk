# UpdateAiGatewayVirtualModelConfigProviderTimeouts2

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigProviderTimeouts2 } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigop.js";

let value: UpdateAiGatewayVirtualModelConfigProviderTimeouts2 = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `byok`                                                                             | Record<string, *number*>                                                           | :heavy_minus_sign:                                                                 | The timeout for each provider that uses a BYOK credential, keyed by provider slug. |