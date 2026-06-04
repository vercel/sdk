# UploadProjectAvatarTrustedIps1

## Example Usage

```typescript
import { UploadProjectAvatarTrustedIps1 } from "@vercel/sdk/models/uploadprojectavatarmanagedrules.js";

let value: UploadProjectAvatarTrustedIps1 = {
  deploymentType: "production",
  addresses: [
    {
      value: "<value>",
    },
  ],
  protectionMode: "additional",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                               | [models.UploadProjectAvatarTrustedIpsDeploymentType](../models/uploadprojectavatartrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `addresses`                                                                                                    | [models.UploadProjectAvatarTrustedIpsAddresses](../models/uploadprojectavatartrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `protectionMode`                                                                                               | [models.UploadProjectAvatarTrustedIpsProtectionMode](../models/uploadprojectavatartrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |