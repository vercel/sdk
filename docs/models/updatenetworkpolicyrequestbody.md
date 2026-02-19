# UpdateNetworkPolicyRequestBody

Network access policy for the sandbox.\n    Controls which external hosts the sandbox can communicate with.\n    Use \"allow-all\" mode to allow all traffic, \"deny-all\" to block all traffic or \"custom\" to provide specific rules.

## Example Usage

```typescript
import { UpdateNetworkPolicyRequestBody } from "@vercel/sdk/models/updatenetworkpolicyop.js";

let value: UpdateNetworkPolicyRequestBody = {
  mode: "custom",
  allowedDomains: [
    "api.github.com",
    "*.npmjs.org",
  ],
  allowedCIDRs: [
    "35.192.0.0/12",
    "104.16.0.0/12",
  ],
  deniedCIDRs: [
    "35.192.0.0/12",
  ],
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                                                                 | [models.UpdateNetworkPolicyMode](../models/updatenetworkpolicymode.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                     | The network access policy mode. Use \"allow-all\" to permit all outbound traffic. Use \"deny-all\" to block all outbound traffic. Use \"custom\" to specify explicit allow/deny rules. | custom                                                                                                                                                                                 |
| `allowedDomains`                                                                                                                                                                       | *string*[]                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                     | List of domain names the sandbox is allowed to connect to. Only applies when mode is \"custom\". Supports wildcard patterns (e.g., \"*.example.com\" matches all subdomains).          | [<br/>"api.github.com",<br/>"*.npmjs.org"<br/>]                                                                                                                                        |
| `allowedCIDRs`                                                                                                                                                                         | *string*[]                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                     | List of IP address ranges (in CIDR notation) the sandbox is allowed to connect to. Traffic to these addresses bypasses domain-based restrictions.                                      | [<br/>"35.192.0.0/12",<br/>"104.16.0.0/12"<br/>]                                                                                                                                       |
| `deniedCIDRs`                                                                                                                                                                          | *string*[]                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                     | List of IP address ranges (in CIDR notation) the sandbox is blocked from connecting to. These rules take precedence over all allowed rules.                                            | [<br/>"35.192.0.0/12"<br/>]                                                                                                                                                            |