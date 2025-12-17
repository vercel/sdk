# CancelDeploymentCveVulnerabilities

Since December 2025 - Temporary for Christmas hackathon 2025 CVE vulnerabilities found during build, only populated when CVE Shield is enabled and vulnerabilities are detected. Only accessible when CveShieldEnabled feature flag is enabled

## Example Usage

```typescript
import { CancelDeploymentCveVulnerabilities } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentCveVulnerabilities = {
  packageName: "<value>",
  packageVersion: "<value>",
  cve: {
    id: "<id>",
    score: 2159.09,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `packageName`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `packageVersion`                                               | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `cve`                                                          | [models.CancelDeploymentCve](../models/canceldeploymentcve.md) | :heavy_check_mark:                                             | N/A                                                            |