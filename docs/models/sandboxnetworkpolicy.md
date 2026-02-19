# SandboxNetworkPolicy

The network policy applied to this sandbox, if any.

## Example Usage

```typescript
import { SandboxNetworkPolicy } from "@vercel/sdk/models/sandboxnetworkpolicy.js";

let value: SandboxNetworkPolicy = {
  mode: "custom",
  allowedDomains: [
    "api.vercel.com",
    "*.example.com",
  ],
  allowedCIDRs: [
    "10.0.0.0/8",
  ],
  deniedCIDRs: [
    "10.0.0.0/8",
  ],
  injectionRules: [
    {
      domain: "api.vercel.com",
      headerNames: [
        "Authorization",
        "X-API-Key",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                                                | [models.Mode](../models/mode.md)                                                                                                                                      | :heavy_check_mark:                                                                                                                                                    | The network policy mode. - 'allow-all': All traffic is allowed. - 'deny-all': All traffic is blocked. - 'custom': Traffic is controlled by explicit allow/deny rules. | custom                                                                                                                                                                |
| `allowedDomains`                                                                                                                                                      | *string*[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                    | List of domain names the sandbox is allowed to connect to. Supports wildcard patterns (e.g., "*.vercel.com" matches all subdomains).                                  | [<br/>"api.vercel.com",<br/>"*.example.com"<br/>]                                                                                                                     |
| `allowedCIDRs`                                                                                                                                                        | *string*[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                    | List of IP address ranges (in CIDR notation) the sandbox is allowed to connect to.                                                                                    | [<br/>"10.0.0.0/8"<br/>]                                                                                                                                              |
| `deniedCIDRs`                                                                                                                                                         | *string*[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                    | List of IP address ranges (in CIDR notation) the sandbox is blocked from connecting to. These rules take precedence over all allowed rules.                           | [<br/>"10.0.0.0/8"<br/>]                                                                                                                                              |
| `injectionRules`                                                                                                                                                      | [models.SandboxInjectionRule](../models/sandboxinjectionrule.md)[]                                                                                                    | :heavy_minus_sign:                                                                                                                                                    | HTTP header injection rules for outgoing requests matching specific domains.                                                                                          |                                                                                                                                                                       |