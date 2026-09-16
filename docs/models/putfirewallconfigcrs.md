# PutFirewallConfigCrs

Custom Ruleset

## Example Usage

```typescript
import { PutFirewallConfigCrs } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigCrs = {
  gen: {
    action: "log",
    active: false,
  },
  java: {
    action: "deny",
    active: true,
  },
  lfi: {
    action: "log",
    active: false,
  },
  ma: {
    action: "deny",
    active: false,
  },
  php: {
    action: "log",
    active: false,
  },
  rce: {
    action: "log",
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
    action: "deny",
    active: false,
  },
  sqli: {
    action: "deny",
    active: false,
  },
  xss: {
    action: "deny",
    active: false,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `gen`                                                                                                     | [models.PutFirewallConfigGen](../models/putfirewallconfiggen.md)                                          | :heavy_check_mark:                                                                                        | Generic Attack - Provide broad protection from various undefined or novel attack vectors.                 |
| `java`                                                                                                    | [models.PutFirewallConfigJava](../models/putfirewallconfigjava.md)                                        | :heavy_check_mark:                                                                                        | Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.             |
| `lfi`                                                                                                     | [models.PutFirewallConfigLfi](../models/putfirewallconfiglfi.md)                                          | :heavy_check_mark:                                                                                        | Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.        |
| `ma`                                                                                                      | [models.PutFirewallConfigMa](../models/putfirewallconfigma.md)                                            | :heavy_check_mark:                                                                                        | Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.         |
| `php`                                                                                                     | [models.PutFirewallConfigPhp](../models/putfirewallconfigphp.md)                                          | :heavy_check_mark:                                                                                        | PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.                          |
| `rce`                                                                                                     | [models.PutFirewallConfigRce](../models/putfirewallconfigrce.md)                                          | :heavy_check_mark:                                                                                        | Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.                   |
| `rfi`                                                                                                     | [models.PutFirewallConfigRfi](../models/putfirewallconfigrfi.md)                                          | :heavy_check_mark:                                                                                        | Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.                 |
| `sd`                                                                                                      | [models.PutFirewallConfigSd](../models/putfirewallconfigsd.md)                                            | :heavy_check_mark:                                                                                        | Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.             |
| `sf`                                                                                                      | [models.PutFirewallConfigSf](../models/putfirewallconfigsf.md)                                            | :heavy_check_mark:                                                                                        | Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs. |
| `sqli`                                                                                                    | [models.PutFirewallConfigSqli](../models/putfirewallconfigsqli.md)                                        | :heavy_check_mark:                                                                                        | SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.                 |
| `xss`                                                                                                     | [models.PutFirewallConfigXss](../models/putfirewallconfigxss.md)                                          | :heavy_check_mark:                                                                                        | XSS Attack - Prevent injection of malicious scripts into trusted webpages.                                |