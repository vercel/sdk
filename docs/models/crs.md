# Crs

Custom Ruleset

## Example Usage

```typescript
import { Crs } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Crs = {
  sd: {
    active: false,
    action: "deny",
  },
  ma: {
    active: false,
    action: "log",
  },
  lfi: {
    active: false,
    action: "log",
  },
  rfi: {
    active: false,
    action: "deny",
  },
  rce: {
    active: false,
    action: "deny",
  },
  php: {
    active: false,
    action: "deny",
  },
  gen: {
    active: false,
    action: "log",
  },
  xss: {
    active: false,
    action: "deny",
  },
  sqli: {
    active: false,
    action: "log",
  },
  sf: {
    active: false,
    action: "log",
  },
  java: {
    active: false,
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sd`                                                                                                      | [models.Sd](../models/sd.md)                                                                              | :heavy_check_mark:                                                                                        | Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.             |
| `ma`                                                                                                      | [models.Ma](../models/ma.md)                                                                              | :heavy_check_mark:                                                                                        | Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.         |
| `lfi`                                                                                                     | [models.Lfi](../models/lfi.md)                                                                            | :heavy_check_mark:                                                                                        | Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.        |
| `rfi`                                                                                                     | [models.Rfi](../models/rfi.md)                                                                            | :heavy_check_mark:                                                                                        | Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.                 |
| `rce`                                                                                                     | [models.Rce](../models/rce.md)                                                                            | :heavy_check_mark:                                                                                        | Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.                   |
| `php`                                                                                                     | [models.Php](../models/php.md)                                                                            | :heavy_check_mark:                                                                                        | PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.                          |
| `gen`                                                                                                     | [models.Gen](../models/gen.md)                                                                            | :heavy_check_mark:                                                                                        | Generic Attack - Provide broad protection from various undefined or novel attack vectors.                 |
| `xss`                                                                                                     | [models.Xss](../models/xss.md)                                                                            | :heavy_check_mark:                                                                                        | XSS Attack - Prevent injection of malicious scripts into trusted webpages.                                |
| `sqli`                                                                                                    | [models.Sqli](../models/sqli.md)                                                                          | :heavy_check_mark:                                                                                        | SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.                 |
| `sf`                                                                                                      | [models.Sf](../models/sf.md)                                                                              | :heavy_check_mark:                                                                                        | Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs. |
| `java`                                                                                                    | [models.Java](../models/java.md)                                                                          | :heavy_check_mark:                                                                                        | Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.             |