# Delivery3

## Example Usage

```typescript
import { Delivery3 } from "@vercel/sdk/models/createdrainop.js";

let value: Delivery3 = {
  type: "<value>",
  endpoint: "<value>",
  encoding: "json",
  compression: "none",
  fileStructure: "hive",
  roleArn: "<value>",
  region: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `endpoint`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `encoding`                                                                                 | [models.CreateDrainDeliveryDrainsEncoding](../models/createdraindeliverydrainsencoding.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `compression`                                                                              | [models.DeliveryCompression](../models/deliverycompression.md)                             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fileStructure`                                                                            | [models.FileStructure](../models/filestructure.md)                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `roleArn`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `region`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `serverSideEncryption`                                                                     | [models.ServerSideEncryption](../models/serversideencryption.md)                           | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `objectAcl`                                                                                | [models.ObjectAcl](../models/objectacl.md)                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |