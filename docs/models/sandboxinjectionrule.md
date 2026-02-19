# SandboxInjectionRule

HTTP header injection rules for outgoing requests matching specific domains.

## Example Usage

```typescript
import { SandboxInjectionRule } from "@vercel/sdk/models/sandboxinjectionrule.js";

let value: SandboxInjectionRule = {
  domain: "api.vercel.com",
  headerNames: [
    "Authorization",
    "X-API-Key",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `domain`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | The domain (or pattern) that this injection rule applies to. Supports wildcards like *.vercel.com. | api.vercel.com                                                                                     |
| `headerNames`                                                                                      | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | The names of HTTP headers that have value that will be injected for requests to this domain.       | [<br/>"Authorization",<br/>"X-API-Key"<br/>]                                                       |