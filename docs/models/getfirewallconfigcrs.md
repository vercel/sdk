# GetFirewallConfigCrs

Custom Ruleset

## Example Usage

```typescript
import { GetFirewallConfigCrs } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigCrs = {
  gen: {
    action: "deny",
    active: false,
  },
  java: {
    action: "deny",
    active: true,
  },
  lfi: {
    action: "log",
    active: true,
  },
  ma: {
    action: "log",
    active: false,
  },
  php: {
    action: "log",
    active: true,
  },
  rce: {
    action: "deny",
    active: true,
  },
  rfi: {
    action: "log",
    active: false,
  },
  sd: {
    action: "log",
    active: true,
  },
  sf: {
    action: "log",
    active: false,
  },
  sqli: {
    action: "deny",
    active: false,
  },
  xss: {
    action: "log",
    active: false,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `gen`                                                                                                     | [models.GetFirewallConfigGen](../models/getfirewallconfiggen.md)                                          | :heavy_check_mark:                                                                                        | Generic Attack - Provide broad protection from various undefined or novel attack vectors.                 |
| `java`                                                                                                    | [models.GetFirewallConfigJava](../models/getfirewallconfigjava.md)                                        | :heavy_check_mark:                                                                                        | Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.             |
| `lfi`                                                                                                     | [models.GetFirewallConfigLfi](../models/getfirewallconfiglfi.md)                                          | :heavy_check_mark:                                                                                        | Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.        |
| `ma`                                                                                                      | [models.GetFirewallConfigMa](../models/getfirewallconfigma.md)                                            | :heavy_check_mark:                                                                                        | Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.         |
| `php`                                                                                                     | [models.GetFirewallConfigPhp](../models/getfirewallconfigphp.md)                                          | :heavy_check_mark:                                                                                        | PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.                          |
| `rce`                                                                                                     | [models.GetFirewallConfigRce](../models/getfirewallconfigrce.md)                                          | :heavy_check_mark:                                                                                        | Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.                   |
| `rfi`                                                                                                     | [models.GetFirewallConfigRfi](../models/getfirewallconfigrfi.md)                                          | :heavy_check_mark:                                                                                        | Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.                 |
| `sd`                                                                                                      | [models.GetFirewallConfigSd](../models/getfirewallconfigsd.md)                                            | :heavy_check_mark:                                                                                        | Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.             |
| `sf`                                                                                                      | [models.GetFirewallConfigSf](../models/getfirewallconfigsf.md)                                            | :heavy_check_mark:                                                                                        | Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs. |
| `sqli`                                                                                                    | [models.GetFirewallConfigSqli](../models/getfirewallconfigsqli.md)                                        | :heavy_check_mark:                                                                                        | SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.                 |
| `xss`                                                                                                     | [models.GetFirewallConfigXss](../models/getfirewallconfigxss.md)                                          | :heavy_check_mark:                                                                                        | XSS Attack - Prevent injection of malicious scripts into trusted webpages.                                |