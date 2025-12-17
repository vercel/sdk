# GetDeploymentResponseBodyCveVulnerabilities

Since December 2025 - Temporary for Christmas hackathon 2025 CVE vulnerabilities found during build, only populated when CVE Shield is enabled and vulnerabilities are detected. Only accessible when CveShieldEnabled feature flag is enabled

## Example Usage

```typescript
import { GetDeploymentResponseBodyCveVulnerabilities } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyCveVulnerabilities = {
  packageName: "<value>",
  packageVersion: "<value>",
  cve: {
    id: "<id>",
    score: 3160.64,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `packageName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `packageVersion`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `cve`                                                                            | [models.GetDeploymentResponseBodyCve](../models/getdeploymentresponsebodycve.md) | :heavy_check_mark:                                                               | N/A                                                                              |