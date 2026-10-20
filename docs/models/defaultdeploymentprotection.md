# DefaultDeploymentProtection

Deployment protection defaults for new projects in this team. When no Vercel Authentication default is saved, `ssoProtection` shows Standard Protection. An explicitly saved `null` remains disabled. Organization policy may override the team default during project creation.

## Example Usage

```typescript
import { DefaultDeploymentProtection } from "@vercel/sdk/models/team.js";

let value: DefaultDeploymentProtection = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `passwordProtection`                                         | [models.PasswordProtection](../models/passwordprotection.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `ssoProtection`                                              | [models.SsoProtection](../models/ssoprotection.md)           | :heavy_minus_sign:                                           | N/A                                                          |