# DeleteSecurityFirewallConfigByConfigVersionRequest

## Example Usage

```typescript
import { DeleteSecurityFirewallConfigByConfigVersionRequest } from "@vercel/sdk/models/deletesecurityfirewallconfigbyconfigversionop.js";

let value: DeleteSecurityFirewallConfigByConfigVersionRequest = {
  projectId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  configVersion: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `projectId`                                               | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `teamId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The Team identifier to perform the request on behalf of.  | team_1a2b3c4d5e6f7g8h9i0j1k2l                             |
| `slug`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The Team slug to perform the request on behalf of.        | my-team-url-slug                                          |
| `configVersion`                                           | *string*                                                  | :heavy_check_mark:                                        | The deployed configVersion for the firewall configuration |                                                           |